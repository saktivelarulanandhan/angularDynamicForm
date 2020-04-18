import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // Add this line
})
export class AppComponent implements OnInit {
  title = 'admin-app';
  dropdownSettings = {};

  adminObj = {
    sections: [
      {
        "Account Details":
        {
          name: "SrcofOrg",
          UIType: 'FL',
          isExpand: true,
          fieldTitleLabels: [
            {
              name: "Field/Section",
              cssClass: 'col-md-4'
            },
            {
              name: "Display",
              cssClass: 'col-md-3'
            },
            {
              name: "Default Values",
              cssClass: 'col-md-3'
            },
            {
              name: "Help/Guid Me",
              cssClass: 'col-md-2'
            }],
          "field": [
            {
              name: "Source of Organisation",
              elementType: 'sl',
              onLoad: 'H',
              readWrite: false,
              defaultOptions: {
                type: 'label',
                onLoad: 'NA'
              },
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ]
            },
            {
              name: "Source of Personal",
              elementType: 'sl',
              onLoad: 'H',
              readWrite: false,
              defaultOptions: {
                type: 'sl',
                onLoad: 'R',
                selectOptions: [
                  { key: 'H', value: "Hide" },
                  { key: 'R', value: "Required" },
                  { key: "O", value: "Optional" },
                  { key: "NA", value: "Not Applicable" }
                ]
              },
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ]
            },
            {
              name: "Multiple IP Number",
              elementType: 'sl',
              onLoad: 'O',
              readWrite: false,
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ]
            },
            {
              name: "Custodian ",
              elementType: 'sl',
              onLoad: 'O',
              readWrite: false,
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ],
              defaultOptions: {
                type: 'ch',
                onLoad: [],
                checkOptions: [
                  { id: 'H', state: false, label: "Hide" },
                  { id: 'R', state: true, label: "Required" },
                  { id: "O", state: false, label: "Optional" },
                  { id: "NA", state: true, label: "Not Applicable" }
                ]
              }
            }
          ]
        }
      },
      {
        "Custodian Details":
        {
          name: "custDt",
          UIType: 'FL',
          isExpand: true,
          fieldTitleLabels: [
            {
              name: "Field/Section",
              cssClass: 'col-md-4'
            },
            {
              name: "Display",
              cssClass: 'col-md-3'
            },
            {
              name: "Default Values",
              cssClass: 'col-md-3'
            },
            {
              name: "Help/Guid Me",
              cssClass: 'col-md-2'
            }],
          "field": [
            {
              name: "Source of Organisation",
              elementType: 'NA',
              onLoad: 'NA',
              readWrite: false,
              isExpand: false,
              defaultOptions: {
                type: 'label',
                value: 'NA'
              },
              groups: [
                {
                  name: "Source of Organisation1",
                  elementType: 'sl',
                  onLoad: 'O',
                  readWrite: false,
                  selectOptions: [
                    { key: 'H', value: "Hide" },
                    { key: 'R', value: "Required" },
                    { key: "O", value: "Optional" },
                    { key: "NA", value: "Not Applicable" }
                  ],
                  defaultOptions: {
                    type: 'label',
                    value: 'NA'
                  }
                },
                {
                  name: "Source of Organisation2",
                  elementType: 'sl',
                  onLoad: 'O',
                  readWrite: false,
                  selectOptions: [
                    { key: 'H', value: "Hide" },
                    { key: 'R', value: "Required" },
                    { key: "O", value: "Optional" },
                    { key: "NA", value: "Not Applicable" }
                  ],
                  defaultOptions: {
                    type: 'label',
                    value: 'NA'
                  }
                },
                {
                  name: "Source of Organisation3",
                  elementType: 'NA',
                  onLoad: 'NA',
                  readWrite: false,
                  defaultOptions: {
                    type: 'label',
                    value: 'NA'
                  },
                  selectOptions: [
                    { key: 'H', value: "Hide" },
                    { key: 'R', value: "Required" },
                    { key: "O", value: "Optional" },
                    { key: "NA", value: "Not Applicable" }
                  ],
                }

              ],
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ]
            },
          ]
        }

      },
      {
        "Lead Track Source":
        {
          name: "SrcofOrg",
          UIType: 'FL',
          isExpand: true,
          fieldTitleLabels: [
            {
              name: "Field/Section",
              cssClass: 'col-md-4'
            },
            {
              name: "Display",
              cssClass: 'col-md-3'
            },
            {
              name: "Default Values",
              cssClass: 'col-md-3'
            },
            {
              name: "Help/Guid Me",
              cssClass: 'col-md-2'
            }],
          "field": [
            {
              name: "Source of Organisation",
              elementType: 'sl',
              onLoad: 'H',
              readWrite: false,
              defaultOptions: {
                type: 'label',
                value: 'NA'
              },
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ]
            },
            {
              name: "Source of Personal",
              elementType: 'sl',
              onLoad: 'H',
              readWrite: false,
              defaultOptions: {
                type: 'sl',
                onLoad: 'R',
                selectOptions: [
                  { key: 'H', value: "Hide" },
                  { key: 'R', value: "Required" },
                  { key: "O", value: "Optional" },
                  { key: "NA", value: "Not Applicable" }
                ]
              },
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ]
            },
            {
              name: "Multiple IP Number",
              elementType: 'sl',
              onLoad: 'O',
              readWrite: false,
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ]
            },
            {
              name: "Custodian ",
              elementType: 'sl',
              onLoad: 'R',
              readWrite: false,
              selectOptions: [
                { key: 'H', value: "Hide" },
                { key: 'R', value: "Required" },
                { key: "O", value: "Optional" },
                { key: "NA", value: "Not Applicable" }
              ]
            }
          ]
        }
      },
    ]
  }


  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }


  getSectionName(sections) {
    return Object.keys(sections)[0];
  }

  loadDefault(field) {
    const filterValue = field.selectOptions.find((e) => e.key.toLowerCase() === field.onLoad.toLowerCase());
    console.log(filterValue);
    return filterValue['value'];
  }

  enableDisplay(fieldList) {
    console.log("Calling Enable Display...");
    fieldList.map(currField => {
      currField.readWrite = true;
      if (currField.groups)
        currField.groups.map(item => item.readWrite = true)
    })
  }


}
