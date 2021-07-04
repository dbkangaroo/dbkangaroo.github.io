(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{493:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-deploy-gtk-based-app-on-windows-updated-at-08-03-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-deploy-gtk-based-app-on-windows-updated-at-08-03-2020"}},[s._v("#")]),s._v(" How to deploy GTK based app on windows?(Updated at 08/03/2020)")]),s._v(" "),t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[s._v("#")]),s._v(" Background")]),s._v(" "),t("p",[s._v("Since developing SQL client tool Kangaroo, I met the major trouble is how to deploy Kangaroo app to user, then searched all of solutions from internet, finally, I found a great article "),t("a",{attrs:{href:"http://www.tarnyko.net/repo/gtk3_build_system/tutorial/gtk3_tutorial.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("GTK+3 Installation Tutorial for Windows"),t("OutboundLink")],1),s._v(", it provides clear guide to deploy GTK based app, so the honor belongs to the author of article.")]),s._v(" "),t("h2",{attrs:{id:"precondition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#precondition"}},[s._v("#")]),s._v(" Precondition")]),s._v(" "),t("p",[s._v("The app must be compiled and executed in environment: "),t("a",{attrs:{href:"https://www.msys2.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MSYS2"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution")]),s._v(" "),t("h3",{attrs:{id:"prepare-app-directory-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-app-directory-structure"}},[s._v("#")]),s._v(" Prepare app directory structure")]),s._v(" "),t("p",[s._v("To deploy GTK based app, the app must follow the directory structure like linux:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[App Home]\n    ├─bin\n    ├─etc\n    │  └─gtk-3.0\n    ├─lib\n    └─share\n        ├─doc\n        ├─glib-2.0\n        │  └─schemas\n        ├─icons\n        │  ├─Adwaita\n        │  └─hicolor\n        ├─locale\n        └─themes\n            ├─Default\n            ├─MS-Windows\n            └─Windows10\n")])])]),t("div",[t("script2",{attrs:{type:"text/javascript",async:"true",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),s._v(" "),t("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3975819313740938","data-ad-slot":"6760827895"}}),s._v(" "),t("script2",{attrs:{type:"text/javascript"}},[s._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])],1),s._v(" "),t("h3",{attrs:{id:"copy-dependent-libraries-of-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-dependent-libraries-of-app"}},[s._v("#")]),s._v(" Copy dependent libraries of app")]),s._v(" "),t("p",[t("strong",[s._v("List of GTK dependencies")]),s._v("\nGTK depends on several libraries:")]),s._v(" "),t("ul",[t("li",[s._v("GLib")]),s._v(" "),t("li",[s._v("cairo")]),s._v(" "),t("li",[s._v("Pango")]),s._v(" "),t("li",[s._v("ATK")]),s._v(" "),t("li",[s._v("gdk-pixbuf")])]),s._v(" "),t("p",[s._v("To run GTK programs you will also need:")]),s._v(" "),t("ul",[t("li",[s._v("gettext-runtime")]),s._v(" "),t("li",[s._v("fontconfig")]),s._v(" "),t("li",[s._v("freetype")]),s._v(" "),t("li",[s._v("expat")]),s._v(" "),t("li",[s._v("libpng")]),s._v(" "),t("li",[s._v("zlib")])]),s._v(" "),t("p",[t("strong",[s._v("How to get the file list and copy them to target dir?")])]),s._v(" "),t("p",[s._v("the solution is a series of linux commands combination like this:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ldd "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SOURCEDIR}")]),s._v('/build/src/kangaroo.exe"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\/mingw64\\/bin\\/.*dll'")]),s._v(" -o "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v('/bin/"')]),s._v("\n")])])]),t("p",[t("strong",[s._v("Done the commands above is all right?   No!!!")])]),s._v(" "),t("p",[s._v("Some components in the GTK framework have plugins like gdk-pixbuf / libgda, so we must use the commands to copy them one by one.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ldd /mingw64/bin/libpq.dll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\/mingw64\\/bin\\/.*dll'")]),s._v(" -o "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v('/bin/"')]),s._v("\n")])])]),t("h3",{attrs:{id:"copy-app-resource-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-app-resource-file"}},[s._v("#")]),s._v(" Copy app resource file")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("/etc")]),s._v(" "),t("ul",[t("li",[s._v("/gtk-3.0/settings.ini : applications-wide settings.")]),s._v(" "),t("li",[s._v("*: miscellaneous files.")])])]),s._v(" "),t("li",[t("p",[s._v("/lib")]),s._v(" "),t("ul",[t("li",[s._v("/gdk-pixbuf-2.0 : GDK-Pixbuf modules. SVG support.")]),s._v(" "),t("li",[s._v("/gtk-3.0 : GTK+-IM modules.")]),s._v(" "),t("li",[s._v("/pango : Pango modules.")]),s._v(" "),t("li",[s._v("*: import libraries, headers, pkg-config files... only needed for development.")])])]),s._v(" "),t("li",[t("p",[s._v("/share")]),s._v(" "),t("ul",[t("li",[s._v("/doc : license and copyleft.")]),s._v(" "),t("li",[s._v("/gtk-3.0 : resource files for gtk3-demo program.")]),s._v(" "),t("li",[s._v("/gtk-doc : documentation in HTML format.")]),s._v(" "),t("li",[s._v("/icons : icon themes, used by gtk3-demo and gtk3-widget-factory.")]),s._v(" "),t("li",[s._v("/locale : localization files. Internationalized text support.")]),s._v(" "),t("li",[s._v("/themes : graphical themes.")]),s._v(" "),t("li",[s._v("*: miscellaneous files.")])])])]),s._v(" "),t("h3",{attrs:{id:"compare-the-runtime-dependency-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compare-the-runtime-dependency-view"}},[s._v("#")]),s._v(" Compare the runtime dependency view")]),s._v(" "),t("p",[s._v("Execute the app under user environment and the app under dev environment in full function mode, compare the runtime dependency view, check the count of dll file and dll file name. make sure they are the same.")]),s._v(" "),t("p",[s._v("Runtime dependency dll view tool "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer",target:"_blank",rel:"noopener noreferrer"}},[s._v("Process Explorer"),t("OutboundLink")],1)]),s._v(" "),t("div",[t("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3975819313740938","data-ad-slot":"6760827895"}}),s._v(" "),t("script2",{attrs:{type:"text/javascript"}},[s._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])],1),s._v(" "),t("h3",{attrs:{id:"full-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-source-code"}},[s._v("#")]),s._v(" Full source code")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Copyright(C) 2018-2020 taozuhong(https://github.com/taozuhong)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Important:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   These functions are a part of the Kangaroo tool suite;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   copyright taozuhong. 2018-2020.  All rights reserved.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author:    taozuhong")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Created:   1.8.2019")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SOURCEDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$( cd "'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/../"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v(" -P "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nTARGETDIR="')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SOURCEDIR}")]),s._v("/build/windows"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nVERSION="')]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),s._v(".2."),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\n# check target directory exist and make it\necho -n "')]),s._v("Check and "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" target directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nif [ ! -d "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TARGETDIR")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n  mkdir '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TARGETDIR")]),s._v('\n  mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/lib/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  mkdir -p "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/glib-2.0/schemas"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/doc"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/themes"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/etc/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nelse \n  if [ ! -d "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n    mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  fi\n\n  if [ ! -d "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/lib"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n    mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/lib/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  fi\n\n  if [ ! -d "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n    mkdir -p "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/glib-2.0/schemas"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n    mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n    mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/doc"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n    mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/themes"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  fi\n\n  if [ ! -d "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/etc"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n    mkdir "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/etc/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  fi\nfi\necho "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\n# copy app dependency library to target dir\necho -n "')]),s._v("Copy app dependency library"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nldd "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SOURCEDIR}")]),s._v("/build/src/kangaroo.exe"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" | grep "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*dll"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o | xargs -I{} cp -f "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nldd '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libjson-glib-1.0-0.dll | grep "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*dll"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o | xargs -I{} cp -f "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nldd '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libsoup-2.4-1.dll | grep "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*dll"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o | xargs -I{} cp -f "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nldd '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libgtksourceview-4-0.dll | grep "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*dll"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o | xargs -I{} cp -f "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\ncp -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SOURCEDIR}")]),s._v("/build/src/kangaroo.exe"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SOURCEDIR}")]),s._v("/data/assets/kangaroo.ico"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/librsvg-2-2.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libgthread-2.0-0.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libcroco-0.6-3.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libtasn1-6.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libproxy-1.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libp11-kit-0.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libnettle-7.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libhogweed-5.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libgnutls-30.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libgmp-10.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\necho "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\n# copy GDBus/Helper and dependencies files\necho -n "')]),s._v("Copy GDBus/Helper and dependencies"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/gdbus.exe "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nldd '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/gdbus.exe | grep "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*dll"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o | xargs -I{} cp -f "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/gspawn-win64-helper.exe "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nldd '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/gspawn-win64-helper.exe | grep "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*dll"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o | xargs -I{} cp -f "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\necho "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\n# libgda providers required library(MySQL/PostgreSQL/JDBC/...)\necho -n "')]),s._v("Copy database client library "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" libgda"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libpq.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/mariadb.dll "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nldd '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/libpq.dll | grep "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*dll"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o | xargs -I{} cp -f "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nldd '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/bin/mariadb.dll | grep "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*dll"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o | xargs -I{} cp -f "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/bin/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nif [ -d "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SOURCEDIR}")]),s._v("/libs/plugin"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n  cp -rf "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SOURCEDIR}")]),s._v("/libs/plugin"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/lib"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nfi\necho "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\n# copy GTK runtime dependencies resource\necho -n "')]),s._v("Copy GTK runtime resource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/lib/gdk-pixbuf-2.0 "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/lib/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/lib/libgda-5.0 "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/lib/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/lib/gio "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/lib/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/etc/gtk-3.0 "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/etc/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/share/icons "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/share/locale "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/share/gtksourceview-4 "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nglib-compile-schemas '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v("/share/glib-2.0/schemas\ncp -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/share/glib-2.0/schemas/gschema* "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/glib-2.0/schemas"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/share/themes/Default "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/themes/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ncp -rf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSYSTEM_PREFIX")]),s._v('/share/themes/MS-Windows "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/themes/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nfind "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/lib"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\" -type f -path '*.dll.a' -exec rm '{}' \\;\necho \"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\n# download license file: LGPL-3.0\necho -n "')]),s._v("Downloading the remote license file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nif [ ! -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/doc/lgpl-3.0.txt"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n  curl "')]),s._v("https://www.gnu.org/licenses/lgpl-3.0.txt"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -o "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/doc/lgpl-3.0.txt"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nfi\nif [ -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TARGETDIR}")]),s._v("/share/doc/lgpl-3.0.txt"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n  echo "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nelse\n  echo "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("failed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v('"\n'),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);