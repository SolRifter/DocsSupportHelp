# 🔁 How to Use ExcelToWord
> Requirements:

* Save your **Excel** and **Word** files first before continuing
* Insert a table on **Excel** and follow the steps below:
* **YOUR FILES AND FOLDERS MUST BE THE EXACT SAME, PLEASE DO A ROOT FOLDER BEFORE SENDING TO OTHER WORKERS**
* **YOU MUST OPEN EXCEL FIRST BEFORE WORD AS CACHE MAY REMAIN INVALID**

## 📂 ROOT FOLDER
- A **root folder** is basically what is the **main folder** containing each sub-folder known as **children** and inside those children are known as **descendants** which are simply files or other folders.
<!---->
    Example
    Structure:
    MyRootFolder {Folder}
        |
        |——MainProject {Folder}
        |    |
        |    |
        |    (ALL FILES AND OTHER FOLDERS ARE INSIDE HERE)
        |
        |
        (END, NO FILES, ETC ARE IN HERE. JUST THE MAIN PROJECT FOLDER)

## 📊 Microsoft Excel: Steps
1. Select your **Table**
2. Go to **Formulas** Tab
3. Inside ***Formulas Tab***, click **Name Manager**
4. Inside **Name Manager**, click **New**
5. Via *Name*, type what is it's unique identifier (**ID**) and u may freely add a comment if so
6. Outsidde **MS Excel** locate the file and hit **COPY URL PATH / COPY AS PATH** or something similar to copy that file's path.
7. After finishing, **head over** to the next step (**📃 Microsoft Word: Steps**)

## 📃 Microsoft Word: Steps
1. Inside **MS Word** hit `CTRL + F9`
2. Via `CTRL + F9` this opens up { }, simply add the values provided below and edit them.
<!---->
* `LINK Excel.Sheet.12 "URL PATH" "TABLE ID" \a \html`
<!---->
    Example: LINK Excel.Sheet.12 "C:\\Users\\ACER\\Downloads\\TestExcelPrototypeDebug.xlsx" "LiveData" \a \html
3. Afterwards you will now have synced that table via **MS Word to MS Excel**
* **1st NOTE:** You must follow the \ or /, if one pathing is incorrect it will fail.
* **2nd NOTE:** Once you open **MS Word** Remember to accept **YES** (Usually happens once u open that **MS Word** document file.) in order for the **syncing** to happen, if not it will not sync if ur going to edit it.
* **3rd NOTE:** On **MacOS**, the path usually follows a ***"/Users/ACER/Downloads/TestExcelPrototypeDebug.xlsx"***, Except we are not going to change the \a \html as those can break if so. (**Not tested, nor confirmed try trial and error.**)

### ❓ What if u selected a different sheet?
1. On **📃 Microsoft Word: Steps | No. 2**, input on the **"TABLE ID"** a **Sheet#!**
* `LINK Excel.Sheet.12 "URL PATH" "SHEET#!TABLE ID" \a \html`
<!---->
    (If you use Sheet2 or something different like MySecondSheet, USE THAT NAME.)
    Example: LINK Excel.Sheet.12 "C:\\Users\\ACER\\Downloads\\TestExcelPrototypeDebug.xlsx" "Sheet2!LiveData3" \a \html


# ⚠️ HOW TO FIX ISSUES
- If **MS Excel** for some reason **does not** let u open that file again or a new one, firstly go **click READ file** then **exit that file**, next simply go to **Task Manager** and search `Excel` and **delete** that background process, due to cache. Since what we're doing is **overriding current known methods** in **Microsoft**.

# 🤔 DIFFICULTY
- Is it that **hard**?, not quite of what many think. Follow the **docs**, as u can be helped by it. Your natural instinct would be easier with this.

<br/>
<br/>
<br/>
<br/>

---

# 🧭 Navigation
<p>
  <a href="SendingFiles.md" style="float:right;">Next ➡</a>
</p>

<br style="clear:both;">

---

[Home](index.md)
