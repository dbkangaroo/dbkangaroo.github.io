# SPDX-License-Identifier: GPL-2.0-or-later
# https://gitlab.com/inkscape/inkscape/-/blob/master/packaging/macos/bash_d/lib_.sh
# examples:
# lib_change_path \
#  @executable_path/../Resources/lib/lib2geom.1.0.0.dylib \
#  $APP_LIB_DIR/inkscape/libinkscape_base.dylib \
#  $APP_EXE_DIR/inkscape
#
#lib_change_paths \
#  @executable_path/../lib \
#  $APP_LIB_DIR \
#  $APP_BIN_DIR/gs
#
# lib_change_siblings $APP_LIB_DIR dylib
# lib_change_siblings $APP_LIB_DIR so

# include_guard

### includes ###################################################################

# Nothing here.

### variables ##################################################################

# Nothing here.

### functions ##################################################################

function lib_change_path
{
  # This is a simple wrapper around install_name_tool to reduce the
  # number of arguments (like $source does not have to be provided
  # here as it can be deducted from $target).
  # Also, the requested change can be applied to multipe binaries
  # at once since 2-n arguments can be supplied.

  local target=$1         # new path to dynamically linked library
  local binaries=${*:2}   # binaries to modify

  local source_lib=${target##*/}   # get library filename from target location

  for binary in $binaries; do   # won't work with spaces in paths
    if [[ $binary == *.so ]] || [[ $binary == *.dylib ]]; then
      lib_reset_id $binary
    fi
    local source=$(otool -L $binary | grep $source_lib | awk '{ print $1 }')
    install_name_tool -change $source $target $binary
  done
}

function lib_change_paths
{
  # This is a slightly more advanced wrapper around install_name_tool.
  # Given a directory $lib_dir that contains the libraries, all libraries
  # linked in $binary can be changed at once to a specified $target path.

  local target=$1         # new path to dynamically linked library
  local lib_dir=$2
  local binaries=${*:3}

  for binary in $binaries; do
    if [[ $binary == *.so ]] || [[ $binary == *.dylib ]]; then
      lib_reset_id $binary
    fi
    for linked_lib in $(otool -L $binary | tail -n +2 | awk '{ print $1 }'); do
      if [ "$(basename $binary)" != "$(basename $linked_lib)" ] &&
         [ -f $lib_dir/$(basename $linked_lib) ]; then
        lib_change_path $target/$(basename $linked_lib) $binary
      fi
    done
  done
}

function lib_change_siblings
{
  # This is a slightly more advanced wrapper around install_name_tool.
  # All libraries inside a given $dir that are linked to libraries present
  # in that $dir can be automatically adjusted.

  local dir=$1
  local target=$2

  for lib in $dir/*.dylib; do
    lib_reset_id $lib
    for linked_lib in $(otool -L $lib | tail -n +2 | awk '{ print $1 }'); do
      if [ "$(basename $lib)" != "$(basename $linked_lib)" ] &&
         [ -f $dir/$(basename $linked_lib) ]; then
        lib_change_path $target/$(basename $linked_lib) $lib
      fi
    done
  done

  if ls $dir/*.so 1> /dev/null 2>&1; then
    for lib in $dir/*.so; do
      lib_reset_id $lib
      for linked_lib in $(otool -L $lib | tail -n +2 | awk '{ print $1 }'); do
        if [ "$(basename $lib)" != "$(basename $linked_lib)" ] &&
          [ -f $dir/$(basename $linked_lib) ]; then
          lib_change_path $target/$(basename $linked_lib) $lib
        fi
      done
    done  
  fi
}

function lib_reset_id
{
  local lib=$1

  install_name_tool -id $(basename $lib) $lib
}

### aliases ####################################################################

# Nothing here.

### main #######################################################################

# Nothing here.
