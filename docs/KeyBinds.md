---
layout: default
title: KeyBinds
---

<link rel="stylesheet" href="styles.css">
<script src="app.js" defer></script>

# ⌨️ Keybinds
- Highly recommended to view the [**Documentation**](index.md) first before reading below.

## 📃 Microsoft Word: Quick Keybinds

* **OS: Microsoft** `F9`: This **updates inputted field codes**.
* **OS: Microsoft** `ALT+F9`: This **opens and closes the field codes**.
* **OS: Microsoft** `CTRL+F9`: This opens up `{ }` where `SET` and `LINK` can be used.
* **OS: Microsoft** `SHIFT+F9`: This opens up **field codes** for the **selected field only**.

## 📃 Microsoft Word: Keybinds Overview
* **Template Usage**: `LINK Excel.Sheet.12 "URL PATH" "TABLE ID" \a \html`
* **`\a`**: Enables automatic updates when the document opens.
* **`\html`**: Forces a clean, lightweight text code using **HTML** preventing file bloat.

**After Use**: Hit `F9` to save changes.

---

### ⚙️ USING { LINK }
* **🪟 Windows (C DRIVE)**:
`LINK Excel.Sheet.12 "C:\\Users\\{UR_OS_USER}\\{UR_FOLDER}\\"{UR_FILENAME}".xlsx" "{UR_TABLE_ID}" \a \html`

* **🪟 Windows (D DRIVE)**:
`LINK Excel.Sheet.12 "D:\\{UR_FOLDER}\\"{UR_FILENAME}".xlsx" "{UR_TABLE_ID}" \a \html`

* Use **Copy as Path** located for that specific **MS Excel File**. Then simply just do:
`LINK Excel.Sheet.12 "PATH" "{UR_TABLE_ID}" \a \html`

* **🍎 Apple**: 🛑 **MASS-LIMITATION**: This system OS is completely **INCOMPATIBLE** with macOS. Apple's layout engine **cannot** process Windows OLE links or evaluate raw system paths using `\html` switches. **All automated pipeline workflows must be built and compiled on Windows.**

---

### 🛠️ USING { SET }
The `{ SET }` field allows u to declare **global variables** for ur document. Preventing **hard-coded** values.

#### 🆕 Declaring Variables
- View [**WordVariables**](WordVariables.md) for further info.
> Hit `CTRL+F9` to open up `{ }`.

---

1. Input these **values** in order to get started.
`{ SET MyVariable "MyValue" }`
* **MyVariable**: Replace this to your **unique** variable name. It **MUST NOT** overlap with any existing variables or **common use** words that are variables and are not variables.
* **MyValue**: Replace this to ur **value** for that **variable**.

* **NOTE:** Reminder to use **UNIQUE** characters for the **variable** and **value**, and **AVOID** spaces, use **-** or **_** or even `camelCase / PascalCase` instead.

#### 🟢 Using Variables
- View [**WordVariables**](WordVariables.md) for further info.
> Hit `CTRL+F9` to open up `{ }`.

---

1. Declare that **variable** that you just created.
`{ MyVariable }`
* **MyVariable**: Replace this as ur **variable** name. 

2. Output:
`{ MyValue }`

#### 🟠 Changing Variable Values
- View [**WordVariables**](WordVariables.md) for further info.
> Hit `ALT+F9` to open up **programming changes viewport**.

---

2. Find ur **variable** that u created.
`{ SET MyVariable "MyValue" }`
* **MyVariable**: Replace this as ur **variable** name. 

3. Click on that **variable** and select it's value to change it.
`{ SET MyVariable "MyNewValue" }`
* **MyNewValue**: Replace this as ur new **value** for that **variable**.

4. To **sync** it to other **used variables**, select it via dragging the selector or hitting `CTRL+A` to select all via **MS Word**
`{ MyVariable }`
* **Output**: `MyNewValue` or **any** value that belongs to ur **variable** that u changed it's **value**.

5. Hit `F9` to **sync** it.

6. Hit `ALT+F9` to **close** the programming changes viewport.

---
# 🧭 Navigation
[Home](index.md)

---

<span style="float: left;">[Previous](SendingFiles.md)</span>

---

<button id="themeModeToggle">🌗 Toggle Theme</button>