#!/bin/bash

# depenency library:
# Make a .app file: https://gist.github.com/oubiwann/453744744da1141ccc542ff75b47e0cf
# Make a .dmg file: https://github.com/LinusU/node-appdmg
# Can't find library: https://www.jianshu.com/p/441a7553700f

PROJECTDIR="$( cd "$(dirname "$0")/../" ; pwd -P )"
TARGETDIR="${PROJECTDIR}/build/kangaroo"
VERSION="$1.$(date +%y%m%d)"
export VERSION
echo "VERSION=$VERSION"

# rebuild app release version
rm -rf "${PROJECTDIR}/build"
meson --prefix=$TARGETDIR --buildtype=release build
ninja -C "${PROJECTDIR}/build" install

# copy app data files to target dir
echo -n "Copy app data files......"
mkdir -p "${TARGETDIR}/etc/"
mkdir -p "${TARGETDIR}/lib/plugin"
mkdir -p "${TARGETDIR}/share/doc"
mkdir -p "${TARGETDIR}/share/themes"
mkdir -p "${TARGETDIR}/share/glib-2.0/schemas"
mkdir -p "${TARGETDIR}/share/licenses/kangaroo"
mkdir -p "${TARGETDIR}/share/icons/hicolor/scalable/apps"
echo "[done]"

function lib_dependency_copy
{
  local target=$1
  local folder=$2

  lib_dir="$( cd "$( dirname "$1" )" >/dev/null 2>&1 && pwd )"
  libraries="$(otool -L $target | grep "/*.*dylib" -o | xargs)"
  for lib in $libraries; do
    if [[ '/usr/lib/' != ${lib:0:9} && '/System/Library/' != ${lib:0:16} ]]; then
      if [[ '@' == ${lib:0:1} ]]; then
        if [[ '@loader_path' == ${lib:0:12} ]]; then
          cp -n "${lib/@loader_path/$lib_dir}" $folder
        else
          echo "Unsupport path: $lib"
        fi
      else
        cp -n $lib $folder
      fi
    fi  
  done
}

function lib_dependency_analyze
{
  # This function use otool to analyze library dependency.
  # then copy the dependency libraries to destination path

  local library_dir=$1
  local targets_dir=$2

  libraries="$(find $library_dir -name \*.dylib -o -name \*.so -type f)"
  for lib in $libraries; do
      lib_dependency_copy $lib $targets_dir
      # otool -L $lib | grep "/usr/local/*.*dylib" -o | xargs -I{} cp -n "{}" "$targets_dir"
  done
}

# copy app dependency library to target dir
echo -n "Copy app dependency library......"
lib_dependency_copy ${PROJECTDIR}/build/src/libkangaroo.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libglib-2.0.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libgobject-2.0.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libgio-2.0.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libgtk-3.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libcairo.2.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libjson-glib-1.0.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libsoup-2.4.1.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libgtksourceview-4.0.dylib "${TARGETDIR}/bin"

lib_dependency_copy /usr/local/lib/libgnutls-dane.0.dylib "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/libunistring.2.dylib "${TARGETDIR}/bin"
lib_dependency_copy /usr/local/lib/libcairo-script-interpreter.2.dylib "${TARGETDIR}/bin"
lib_dependency_copy /usr/local/lib/libgettextsrc-0.20.1.dylib "${TARGETDIR}/bin"
lib_dependency_copy /usr/local/lib/libharfbuzz-icu.0.dylib "${TARGETDIR}/bin"
icu_version="$(pkg-config icu-io --modversion)"
lib_dependency_copy "/usr/local/Cellar/icu4c/$icu_version/lib/libicuio.${icu_version:0:2}.dylib" "${TARGETDIR}/bin"
lib_dependency_copy "/usr/local/Cellar/icu4c/$icu_version/lib/libicutu.${icu_version:0:2}.dylib" "${TARGETDIR}/bin"

cp -f "${PROJECTDIR}/build/src/kangaroo" "${TARGETDIR}/bin"
cp -f "${TARGETDIR}/lib/libkangaroo.dylib" "${TARGETDIR}/bin"
cp -f "${PROJECTDIR}/tools/mac_launcher.sh" "${TARGETDIR}/bin/launcher.sh"
cp -f /usr/local/lib/libgtkmacintegration-gtk3.2.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/libgirepository-1.0.1.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/librsvg-2.2.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/libgthread-2.0.0.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/libcroco-0.6.3.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/p11-kit-proxy.dylib "${TARGETDIR}/bin"
cp -f /usr/local/lib/libgmpxx.4.dylib "${TARGETDIR}/bin"
echo "[done]"

# copy GDBus/Helper and dependencies files
echo -n "Copy GDBus/Helper and dependencies......"
cp -f /usr/local/bin/gdbus "${TARGETDIR}/bin"
cp -f /usr/local/bin/gdk-pixbuf-query-loaders "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/gdbus "${TARGETDIR}/bin"
lib_dependency_copy ${TARGETDIR}/bin/gdk-pixbuf-query-loaders "${TARGETDIR}/bin"
echo "[done]"

# libgda providers required library(MySQL/PostgreSQL/JDBC/...)
echo -n "Copy database client library for libgda......"
lib_dependency_copy /usr/local/lib/libpq.5.dylib "${TARGETDIR}/bin"
lib_dependency_copy /usr/local/lib/libmariadb.3.dylib "${TARGETDIR}/bin"
if [ -d "/usr/local/lib/plugin" ]; then
	cp -f /usr/local/lib/plugin/*password*.so "${TARGETDIR}/lib/plugin"
fi
#ln -s "${TARGETDIR}/lib/libmariadb.dylib" "${TARGETDIR}/lib/mariadb.dylib"
lib_dependency_analyze ${TARGETDIR}/bin ${TARGETDIR}/bin
echo "[done]"

# copy GTK runtime dependencies resource
echo -n "Copy GTK runtime resource......"
cp -rf /usr/local/lib/gio "${TARGETDIR}/lib/"
cp -rf /usr/local/lib/gtk-3.0 "${TARGETDIR}/lib/"
cp -rf /usr/local/lib/gdk-pixbuf-2.0 "${TARGETDIR}/lib/"
cp -rf /usr/local/lib/girepository-1.0 "${TARGETDIR}/lib/"
cp -rf /usr/local/lib/libgda-5.0 "${TARGETDIR}/lib/"
cp -rf /usr/local/etc/gtk-3.0 "${TARGETDIR}/etc/"
# Avoid override the latest locale file
cp -r /usr/local/share/locale "${TARGETDIR}/share/"
cp -rf /usr/local/share/icons "${TARGETDIR}/share/"
cp -rf /usr/local/share/fontconfig "${TARGETDIR}/share/"
cp -rf /usr/local/share/themes/Mac "${TARGETDIR}/share/themes/"
cp -rf /usr/local/share/themes/Default "${TARGETDIR}/share/themes/"
cp -rf /usr/local/share/gtksourceview-4 "${TARGETDIR}/share/"
glib-compile-schemas /usr/local/share/glib-2.0/schemas
cp -f /usr/local/share/glib-2.0/schemas/gschema* "${TARGETDIR}/share/glib-2.0/schemas"
# find "${TARGETDIR}/bin" -type f -path '*.dll.a' -exec rm '{}' \;
lib_dependency_analyze ${TARGETDIR}/lib ${TARGETDIR}/bin
lib_dependency_analyze ${TARGETDIR}/bin ${TARGETDIR}/bin
echo "[done]"

# copy app icons and license files to target dir
echo -n "Copy app icon(svg) files......"
cp -f "${PROJECTDIR}/data/assets/kangaroo.ico" "${TARGETDIR}/bin"
cp -f "${PROJECTDIR}/data/assets/kangaroo.svg" "${TARGETDIR}/share/icons/hicolor/scalable/apps"
echo "[done]"


# download license file: LGPL-3.0
echo -n "Downloading the remote license file......"
cp -f "${PROJECTDIR}/LICENSE" "${TARGETDIR}/share/licenses/kangaroo"
if [ ! -f "${TARGETDIR}/share/licenses/kangaroo/lgpl-3.0.txt" ]; then
  curl "https://www.gnu.org/licenses/lgpl-3.0.txt" -o "${TARGETDIR}/share/licenses/kangaroo/lgpl-3.0.txt"
  if [ $? -eq 0 ]; then
    echo "[done]"
  else
    echo "[failed]"
  fi
else
  echo "[done]"
fi

echo "make macos executable file(.app)......"
cd "${PROJECTDIR}/build"
cp "${PROJECTDIR}/tools/installers/Info.plist" "${PROJECTDIR}/build"
cp "${PROJECTDIR}/tools/installers/mac.icns" "${PROJECTDIR}/build/kangaroo.icns"
../tools/mac_app_pack.sh --path "${TARGETDIR}" --name "kangaroo" --info "Info.plist" --icons "kangaroo.icns"
if [ $? -eq 0 ]; then
  echo "[done]"
  else
  echo "[failed]"
fi

# make installer package
echo "make macos installer(.dmg)......"
cp "${PROJECTDIR}/tools/installers/dmg.json" kangaroo_dmg.json
cp "${PROJECTDIR}/data/assets/background.png" "${PROJECTDIR}/build/kangaroo_dmg_background.png"
appdmg kangaroo_dmg.json "kangaroo-${VERSION}-macos.dmg"
if [ $? -eq 0 ]; then
  echo "[done]"
  else
  echo "[failed]"
fi

# make portable package
echo -n "make macos portable......"
tar czf "${PROJECTDIR}/build/kangaroo-${VERSION}-macos.tar.gz" -C "${PROJECTDIR}/build/" kangaroo.app
if [ $? -eq 0 ]; then
  echo "[done]"
  else
  echo "[failed]"
fi
