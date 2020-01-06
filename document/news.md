---
title: News Timeline
lang: en-US
---

# Kangaroo News Timeline

## [Kangaroo v0.11.0.200106](/download/v0.11.0.200106)
1. add app home page
2. reimplement DSV format engine
3. improve DSV compatible with other tools.
4. improve DSV option UI layout
5. improve date column editting support
6. fixed: generate sql statement incorrect.
7. fixed: crash while importing data
8. fixed: can't save data while editting on data grid
9. fixed: warning message about db tree

## [Kangaroo v0.10.0.191223](/download/v0.10.0.191223)
1. add export assistant UI
2. batch export table to file.
3. support data formats(DSV/JSON/XML/HTML/Markdown/SQL)
4. support title for column(rename)

## [Kangaroo v0.9.5.191216](/download/v0.9.5.191216)
1. import data from DSV format
2. import data from JSON format
3. import data from XML format
4. Rewritten export data as XML format with libxml2;
5. add export modules assistant UI
6. implement export format and table selection page

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.9.4.191209](/download/v0.9.4.191209)
1. add import summary page
2. add five kinds of import mode
3. import csv format data to table
4. fixed logo can't show on linux and macos platform

## [Kangaroo v0.9.3.191202](/download/v0.9.3.191202)
1. implement column mapping function

## [Kangaroo v0.9.2.191125](/download/v0.9.2.191125)
1. Import data from file(dsv/xml/json) #19
    - implement the import UI(format, encoding and preview)
    - implement the import UI(DSV format option)
    - implement the import UI(data preview)
    - implement the import UI(column mapping)
    - implement the import UI(process progress)
    - implement DSV format parse and preview

## [Kangaroo v0.9.1.191118](/download/v0.9.1.191118)
1. Export data to file(dsv(csv/tsv/...)/xml/json/sql/md/html) #18
    - Export data to DSV format(CSV/TSV/...)
    - Export data to JSON format
    - Export data to XML format
    - Export data to HTML format
    - Export data to SQL format(INSERT)
    - Export data to Markdown format
2. Improve file filter of save dialog

## [Kangaroo v0.9.0.191111](/download/v0.9.0.191111)
1. Edit table schema and save to database #5
2. Export data to JSON and DSV format

## [Kangaroo v0.8.5.191104](/download/v0.8.5.191104)
1. Edit table schema and save to database(SQLite and PostgreSQL preview) #5
2. Add export data formats UI and interfaces
3. Update tab's title while save the new table

## [Kangaroo v0.8.4.191028](/download/v0.8.4.191028)
1. Rearrange db tree and UI #17
2. Add refresh menu on db tree
3. Implement multiple databases support
4. Edit table schema and save to database(MySQL Preview) #5

## [Kangaroo v0.8.3.191021](/download/v0.8.3.191021)
1.  新建连接时出现插件未加载错误 #12 <br/>
Load plugin failed while create new connection #12
2. Add MacOS compilation support #13
3. refactor database model to improve interoperability

## [Kangaroo v0.8.2.191014](/download/v0.8.2.191014)
1. improve: field selection dialog support to select fields by value(#9)
2. improve: schema designer support to navigate with Tab key(#3)
3. fixed: fields expression dialog reload value failed(#10)
4. fixed: missing windows shortcut icon(start menu and desktop) (#7)
5. fixed: missing syntax highlighting support(#8)
6. fixed: load data in form view failed(#11)

## [Kangaroo v0.8.1.190930](/download/v0.8.1.190930)
1. improve: generate exact correct editing sql
2. refactor: add source code editor module
3. improve SQLite schema sql builder
4. fixed: text editor and code editor can't show blank line
5. fixed: get string failed while create data row(console)
6. fixed: console critical message while editing schema

## [Kangaroo v0.8.0.190923](/download/v0.8.0.190923)
1. implement the builder of PostgreSQL(11.0)
2. save table schema to database(create only)
3. update build script: hide app console window
4. update windows installer: add MySQL and PostgreSQL client library
5. update the links on the about window
6. improve single line edit control(auto focus)
7. update gui cursor while busy

## [Kangaroo v0.7.2.190916](/download/v0.7.2.190916)
1. Implement loader of PostgreSQL 11(full version)
2. Improve designer form of PostgreSQL 11
3. refactor content of Kangaroo repo
4. create new site: dbkangaroo.github.io
5. add windows installer script