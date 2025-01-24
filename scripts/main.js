
const addCourse = document.getElementById("add-course")

const slotSelectorDOM = document.getElementById("slot-selector")

const courseCodeDOM = document.getElementById("course-code")

const courseNameDOM = document.getElementById("course-name")

const outputTable = document.getElementById("output-table")
const courses = document.getElementById("courses")

// record time when page is loaded
const loadTime = new Date();

const segmentDates = {
  "1-2": { start: new Date('2023-01-01'), end: new Date('2023-02-28') },
  "3-4": { start: new Date('2023-03-01'), end: new Date('2023-04-30') },
  "5-6": { start: new Date('2023-05-01'), end: new Date('2023-06-30') }
};

var slotData = [
  {
    slot: "a",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "09.00 - 09.55" },
      { day: "Wednesday", time: "11.00 - 11.55" },
      { day: "Thursday", time: "10.00 - 10.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "b",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "10.00 - 10.55" },
      { day: "Wednesday", time: "09.00 - 09.55" },
      { day: "Thursday", time: "11.00 - 11.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "c",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "11.00 - 11.55" },
      { day: "Wednesday", time: "10.00 - 10.55" },
      { day: "Thursday", time: "09.00 - 09.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "d",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "12.00 - 12.55" },
      { day: "Tuesday", time: "09.00 - 09.55" },
      { day: "Friday", time: "11.00 - 11.55" }
    ],
    conflicts: ["fn2", "fn5"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "e",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "10.00 - 10.55" },
      { day: "Thursday", time: "12.00 - 12.55" },
      { day: "Friday", time: "09.00 - 09.55" }
    ],
    conflicts: ["fn2", "fn5"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "f",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "11.00 - 11.55" },
      { day: "Wednesday", time: "14.30 - 15.55" },
      { day: "Friday", time: "10.00 - 10.55" }
    ],
    conflicts: ["fn2", "fn5"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "g",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "12.00 - 12.55" },
      { day: "Wednesday", time: "12.00 - 11.55" },
      { day: "Friday", time: "12.00 - 12.55" }
    ],
    conflicts: [],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "p",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "14.30 - 15.55" },
      { day: "Thursday", time: "16.00 - 17.25" }
    ],
    conflicts: ["an1", "an4"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "q",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "16.00 - 17.25" },
      { day: "Thursday", time: "14.30 - 15.55" }
    ],
    conflicts: ["an1", "an4"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "r",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "14.30 - 15.55" },
      { day: "Friday", time: "16.00 - 17.25" }
    ],
    conflicts: ["an2", "an5"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "s",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "16.00 - 17.25" },
      { day: "Friday", time: "14.30 - 15.55" }
    ],
    conflicts: ["an2", "an5"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "fn1",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "09.00 - 11.25" }
    ],
    conflicts: ["a", "b", "c"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "fn2",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "09.00 - 11.25" }
    ],
    conflicts: ["d", "e", "f"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "fn3",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Wednesday", time: "09.00 - 11.25" }
    ],
    conflicts: ["b", "c", "a"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "fn4",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Thursday", time: "09.00 - 11.25" }
    ],
    conflicts: ["c", "a", "b"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "fn5",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Friday", time: "09.00 - 11.25" }
    ],
    conflicts: ["e", "f", "d"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "an1",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "14.30 - 17.25" }
    ],
    conflicts: ["p", "q"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "an2",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "14.30 - 17.25" }
    ],
    conflicts: ["r", "s"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "an3",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Wednesday", time: "14.30 - 17.25" }
    ],
    conflicts: [],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "an4",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Thursday", time: "14.30 - 17.25" }
    ],
    conflicts: ["q", "p"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  },
  {
    slot: "an5",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Friday", time: "14.30 - 17.25" }
    ],
    conflicts: ["s", "r"],
    segments: [],
    dateAdded: undefined,
    dateModified: undefined
  }
];

const highlightSubject = (courseCode, courseSlot) => {
  const cellsToEdit = document.querySelectorAll(`#${courseSlot}`);
  for (let cell of cellsToEdit) {
    cell.innerText = courseCode;
    cell.classList.add(`${courseSlot}`);
  }
}

const addNs = (courseSlot = "") => {
  switch (courseSlot) {
    case "fn1":
      hideConflictingSlots('#a #b #c');

  }
}

const hideConflictingSlots = (slotLetters) => {
  slotLetters.forEach(slotLetter => {
    const huihui = document.querySelectorAll("#" + slotLetter)
    huihui.forEach(element => element.classList.add("hidden"));
  })


  const courseList = slotLetters.map(slotLetter => slotData.find(course => course.slot === slotLetter))

  console.log(courseList)
  courseList.forEach(courseListItem => {
    const toAddBack = courseListItem.conflicts;
    //toAddBack is an array, ok?
    toAddBack.forEach(e => {
      const chan = document.querySelectorAll("#" + e)
      chan.forEach(element => { element.classList.remove("hidden") })
    })
  })
  return;
}


const exportToICS = () => {
  let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Your Organization//Your Product//EN\n";

  slotData.forEach(slot => {
    if (slot.segments.length === 0) return;

    console.log(slot.slot);
    slot.segments.forEach(segment => {
      console.log(typeof segment);
      // output is 1-6
      console.log(segmentDates);
      const segmentDate = segmentDates[segment];
      console.log(segment);
      console.log(segmentDate);
      // output is undefined, why?

      if (!segmentDate) return;
      slot.classTimings.forEach(timing => {
        const [startHour, startMinute] = timing.time.split(" - ")[0].split(".");
        const [endHour, endMinute] = timing.time.split(" - ")[1].split(".");

        icsContent += `BEGIN:VEVENT\n`;
        icsContent += `SUMMARY:${slot.courseName}\n`;
        icsContent += `DESCRIPTION:Course Code: ${slot.courseCode}\\nInstructors: ${slot.instructors.join(", ")}\n`;
        icsContent += `DTSTART;TZID=UTC:${formatDate(segmentDate.start, timing.day, startHour, startMinute)}\n`;
        icsContent += `DTEND;TZID=UTC:${formatDate(segmentDate.start, timing.day, endHour, endMinute)}\n`;
        icsContent += `RRULE:FREQ=WEEKLY;UNTIL=${formatDate(segmentDate.end, timing.day, endHour, endMinute, true)}\n`;
        icsContent += `END:VEVENT\n`;
      });
    });
  });

  icsContent += "END:VCALENDAR";
  // console log the ics content
  console.log(icsContent);
  const blob = new Blob([icsContent], { type: "text/calendar" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "schedule.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const formatDate = (date, day, hour, minute, isEnd = false) => {
  const dayMap = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 0
  };

  const resultDate = new Date(date);
  resultDate.setDate(resultDate.getDate() + ((dayMap[day] - resultDate.getDay() + 7) % 7));
  resultDate.setHours(hour, minute, 0, 0);

  if (isEnd) {
    resultDate.setHours(hour, minute, 59, 999);
  }

  return resultDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
};

document.getElementById("export-ics").addEventListener("click", exportToICS);

// store the data in local storage
const storeData = () => {
  localStorage.setItem("slotData", JSON.stringify(slotData));
}
// load the data from local storage
const loadData = () => {
  const data = localStorage.getItem("slotData");
  if (data) {
    slotData = JSON.parse(data);
  }
}

// add event listener to store data on window unload
window.BeforeUnloadEvent = storeData;
// load data on page load
window.addEventListener("load", () => {
  loadData();
  slotData.forEach(slot => {
    slot.segments.forEach(segment => {
      highlightSubject(slot.courseCode, slot.slot);
    });
  });
}
);

// update ui



function addSlot(courseCodeElement, courseSlotElement) {
  const courseCode = courseCodeElement.value;
  const courseSlot = courseSlotElement.value.split(" ")[1].toLowerCase();
  const courseName = courseNameDOM.value;
  const segmentElement = document.getElementById("segment");
  const segment = segmentElement.value;
  const slotToAdd = slotData.find(subject => subject.slot === courseSlot);

  const segmentRegex = /^[1-6]-[1-6]$/;
  if (!segmentRegex.test(segment)) {
    segmentElement.classList.add("error");
    segmentElement.setAttribute("title", "Segment must be in the format X-Y where X and Y are digits between 1 and 6.");
    return;
  } else {
    segmentElement.classList.remove("error");
    segmentElement.removeAttribute("title");
  }

  if (slotToAdd.courseCode !== "") {
    if (!askConfirmation("A course at this slot already exists. Replace?")) {
      return;
    }
    slotToAdd.dateModified = new Date();
  } else {
    slotToAdd.dateAdded = new Date();
  }
  slotToAdd.courseName = courseName;
  slotToAdd.courseCode = courseCode;
  slotToAdd.segments.push(segment);
  console.log(slotToAdd.segments);
  hideConflictingSlots(slotToAdd.conflicts);

  if (courseCode === "") {
    if (!askConfirmation("Course code empty. Continue?")) {
      return;
    }
  }

  highlightSubject(courseCode, courseSlot);
}

function removeSlot(slot) {

}

addCourse.addEventListener("click", () => addSlot(courseCodeDOM, slotSelectorDOM))


// Other functionalities
function askConfirmation(string) {
  return confirm(string);
}

// Auto focus to Subject Code input on loading
window.onload = function () {
  document.getElementById('course-code').focus();
};

//Press Enter to add course
courseCodeDOM.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && document.activeElement === courseCodeDOM) {
    event.preventDefault();
    addSlot(courseCodeDOM, slotSelectorDOM);
  }
})

//For Bookmarklet
const urlParams = window.location.search;
if (urlParams) {
  const inputs = urlParams.split("?")
  inputs.shift()
  for (const input of inputs) {
    const inputArray = input.split("&")
    highlightSubject(inputArray[0], inputArray[1].toLowerCase())
  }
}


// toggle theme using keyboard shortcut
document.addEventListener("keydown", (event) => {
  if (event.key === "d" && document.activeElement.tagName !== "INPUT") {
    document.body.classList.toggle("dark");
  }
})

// theme should match system theme by default and update on system theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (e.matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

// set theme based on system theme on page load
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}


// make all h2 level headings collapsible and add an arrow  to indicate collapsibility
const h2s = document.querySelectorAll("h2");
h2s.forEach(h2 => {
  h2.innerHTML = `<span class="collapsible-arrow"><i class="icon-chevron-right"></i></span> ${h2.innerHTML}`
  h2.addEventListener("click", () => {
    h2.nextElementSibling.classList.toggle("hidden");
    h2.querySelector(".collapsible-arrow").textContent = h2.nextElementSibling.classList.contains("hidden") ? "▶" : "▼";
  })
})
