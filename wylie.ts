export const wylieProject = {
  name: "Wylie",
  location: "Pittsburgh, PA",
  health: 78,
  target: "Operational Readiness",
  alerts: [
    "Hood commissioning checklist pending",
    "Startup blockers require MEP verification",
    "AI Review queue will hold document changes before commit"
  ],
  equipment: [
    {
      item: "2168",
      name: "Undercounter Freezer",
      manufacturer: "Kintera / TriMark",
      model: "KUC48F / KUC48FZ",
      area: "Cookline",
      power: "120V/1PH, NEMA 5-15P",
      startup: "No",
      status: "Ready / self-contained"
    },
    {
      item: "2170",
      name: "Mega Top Sandwich Food Prep Refrigerator",
      manufacturer: "Kintera / TriMark",
      model: "KS48 / KS48Z",
      area: "Cookline",
      power: "120V/1PH, NEMA 5-15P",
      startup: "No",
      status: "MEP verification required"
    },
    {
      item: "2172",
      name: "Ventless Popcorn Popper",
      manufacturer: "Gold Medal",
      model: "2011-00-821 / 2670-071",
      area: "Cookline / Concessions",
      power: "120/208V/1PH",
      startup: "Yes",
      status: "ANSUL / permit verification"
    }
  ]
};
