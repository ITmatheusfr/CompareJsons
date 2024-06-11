const firstJson = document.getElementById("first-json");
const secondJson = document.getElementById("second-json");
const firstSections = ["section-jsons", "section-compare"];
const secondSections = ["section-informations", "section-reset"];
const textareas = [
  "differences-textarea",
  "fields-textarea",
  "new-fields-textarea",
];

//Compare
function runCompare() {
  try {
    const obj1 = getJsonObject(firstJson.value);
    const obj2 = getJsonObject(secondJson.value);
    const compareObj = compareJsonObjects(obj1, obj2);
    console.log(compareObj);
    showSection(firstSections, false);
    showSection(secondSections, true);
    textareas.forEach((id, index) => {
      const element = document.getElementById(id);
      if (index == 0) {
        element.value = compareObj.differences
          .map(
            (item) =>
              `${item.field}\n1º Value: ${item.firstValue}\n2º Value: ${item.secondValue} \n\n`
          )
          .join("");
      }

      if (index == 1) {
        element.value = compareObj.fields.map((item) => `${item} \n`).join("");
      }

      if (index == 2) {
        element.value = compareObj.newFields
          .map((item) => `Field: ${item.field}\nValue: ${item.value} \n\n`)
          .join("");
      }
    });
  } catch (error) {
    modalError(error);
  }
}

function compareJsonObjects(obj1, obj2, prefix = "") {
  const fields = [];
  const newFields = [];
  const differences = [];

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const allKeys = new Set([...keys1, ...keys2]);

  allKeys.forEach((key) => {
    const firstValue = obj1[key];
    const secondValue = obj2[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (!(key in obj1)) {
      newFields.push({ field: prefixedKey, value: secondValue });
    } else if (!(key in obj2)) {
      fields.push(prefixedKey);
    } else if (
      typeof firstValue === "object" &&
      typeof secondValue === "object"
    ) {
      const subResult = compareJsonObjects(
        firstValue,
        secondValue,
        prefixedKey
      );
      fields.push(...subResult.fields);
      newFields.push(...subResult.newFields);
      differences.push(...subResult.differences);
    } else {
      fields.push(prefixedKey);
      if (firstValue !== secondValue) {
        differences.push({
          field: prefixedKey,
          firstValue,
          secondValue,
        });
      }
    }
  });

  return { fields, newFields, differences };
}

//Inputs
function clearInputs() {
  firstJson.value = "";
  secondJson.value = "";
}

//JSON
function getJsonObject(jsonString) {
  let jsonObject = JSON.parse(jsonString);
  //jsonObject = Array.isArray(jsonObject) ? jsonObject[0] : jsonObject;
  return jsonObject;
}

function getAllFields(jsonObject, prefix = "") {
  const fields = [];
  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      const prefixedKey = prefix ? `${prefix}.${key}` : key;
      fields.push(prefixedKey);
      if (typeof jsonObject[key] === "object" && jsonObject[key] !== null) {
        fields.push(...getAllFields(jsonObject[key], prefixedKey));
      }
    }
  }
  return fields;
}

//Modal
function showDialog() {
  let dialog = document.getElementById("dialog");
  dialog.classList.remove("hidden");
  dialog.classList.remove("opacity-0");
}

function hideDialog() {
  let dialog = document.getElementById("dialog");
  dialog.classList.add("opacity-0");
  setTimeout(() => {
    dialog.classList.add("hidden");
  }, 500);
}

function modalError(error) {
  clearInputs();
  showDialog();
  console.error("Erro ao fazer o parse do JSON:", error);
}

//Section functions
function showSection(ids, show) {
  ids.forEach((value) => {
    const element = document.getElementById(value);
    if (show) {
      element.classList.remove("hidden");
      element.classList.remove("opacity-0");
    } else {
      element.classList.add("opacity-0");
      element.classList.add("hidden");
    }
  });
}

function reset() {
  showSection(firstSections, true);
  showSection(secondSections, false);
}
