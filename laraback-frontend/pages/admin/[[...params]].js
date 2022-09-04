import React from "react";
import AdminComponent from "../../components/adminPart/AdminComponent";
import { useRouter } from "next/router";
import CustomizableForm from "../../components/adminPart/CustomizableForm";
const affiliate_network_object= ['added','confirmeds','declineds','image','last_csv_upload','network_name','pendings','post_back','program_id','status','website']
const formPart={

}

const tableRows= [
  {
    id: 1,
    Network: "Snow",
    User: "Jon",
    Cashback: 8111,
    Currency: "USD",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: 35,
  },
  {
    id: 2,
    Network: "Lannister",
    User: "Cersei",
    Cashback: 8111,
    Currency: "USD",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: 42,
  },
  {
    id: 3,
    Network: "Lannister",
    User: "Jaime",
    Cashback: 3242,
    Currency: "USD",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: 45,
  },
  {
    id: 4,
    Network: "Stark",
    User: "Arya",
    Cashback: 8111,
    Currency: "BNB",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: 16,
  },
  {
    id: 5,
    Network: "Targaryen",
    User: "Daenerys",
    Cashback: 8111,
    Currency: "USD",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: null,
  },
  {
    id: 6,
    Network: "Melisandre",
    User: null,
    Cashback: 8111,
    Currency: "USD",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: 150,
  },
  {
    id: 7,
    Network: "Clifford",
    User: "Ferrara",
    Cashback: 8111,
    Currency: "USD",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: 44,
  },
  {
    id: 8,
    Network: "Frances",
    User: "Rossini",
    Cashback: 8111,
    Currency: "USD",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: 36,
  },
  {
    id: 9,
    Network: "Roxie",
    User: "Harvey",
    Cashback: 8111,
    Currency: "USD",
    Status: "confirmed",
    "Lock Cashback Status": "no",
    "Lock Cashback Amount": "no",
    Store: 65,
  },
]


const makeTableData=(model)=>{
  const tableData={
    tableHeader:{
      columns:model,
      dataOnly:model
    },
    tableRows,
  }
  return tableData
}
const makeForm=(model,data)=>{
  const formProperties={
    formSections:[
      {
        title: "Stores",
        elements: []
      },
    
    ]
  }
  model.forEach(element=>{
    const files=['photo','image','logo']
    const checkBoxes=['status']
    const dropDowns=['category','country']
    const notTranslatable=['url','page','slug']
    if(files.includes(element)){
      formProperties.formSections[0].elements.push(
        {
          title: element,
          type:4
        }
      );
    }
    else if(checkBoxes.includes(element)){
      formProperties.formSections[0].elements.push({
        title: element,
        type:12,
        checkBox1:'Publish',
        checkBox2:'Draft',
        checkBox3:'trash'
      })
    }
    else if(dropDowns.includes(element)){
      formProperties.formSections[0].elements.push(
        {
          title: element,
          type:11
        }
      )
    }
    else if(element.slice(-1,-3)=='able'){
      formProperties.formSections[0].elements.push({
        title: element,
        type:9
      })
    }
    else{
      formProperties.formSections[0].elements.push({
        title: element,
        type:1
      })
    }

  })

  return formProperties;
}

const tableData = {
  tableHeader: {
    columns: [
      "User",
      "Network",
      "Store",
      "Cashback",
      "Currency",
      "Status",
      "Lock Cashback Status",
      "Lock Cashback Amount",
    ],
    dataOnly: ["User", "Network", "Store"],
  },
  tableRows: [
    {
      id: 1,
      Network: "Snow",
      User: "Jon",
      Cashback: 8111,
      Currency: "USD",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: 35,
    },
    {
      id: 2,
      Network: "Lannister",
      User: "Cersei",
      Cashback: 8111,
      Currency: "USD",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: 42,
    },
    {
      id: 3,
      Network: "Lannister",
      User: "Jaime",
      Cashback: 3242,
      Currency: "USD",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: 45,
    },
    {
      id: 4,
      Network: "Stark",
      User: "Arya",
      Cashback: 8111,
      Currency: "BNB",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: 16,
    },
    {
      id: 5,
      Network: "Targaryen",
      User: "Daenerys",
      Cashback: 8111,
      Currency: "USD",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: null,
    },
    {
      id: 6,
      Network: "Melisandre",
      User: null,
      Cashback: 8111,
      Currency: "USD",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: 150,
    },
    {
      id: 7,
      Network: "Clifford",
      User: "Ferrara",
      Cashback: 8111,
      Currency: "USD",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: 44,
    },
    {
      id: 8,
      Network: "Frances",
      User: "Rossini",
      Cashback: 8111,
      Currency: "USD",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: 36,
    },
    {
      id: 9,
      Network: "Roxie",
      User: "Harvey",
      Cashback: 8111,
      Currency: "USD",
      Status: "confirmed",
      "Lock Cashback Status": "no",
      "Lock Cashback Amount": "no",
      Store: 65,
    },
  ],
};

function Admin() {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params);
  if(params[0]=='affiliate_networks'){
    if (params[1] == "form") {
      return (
        <AdminComponent routes={params}
          form={<CustomizableForm  formProperties={makeForm(affiliate_network_object)}
        />} />
      );
    }
    return <AdminComponent routes={params} tableData={makeTableData(affiliate_network_object)} />;
  }
  if (params[0] == "stores") {
    if (params[1] == "form") {
      const formProperties = {
        formSections: [
          {
            widthPercentage: 47,
            title: "Stores",
            elements: [
              {
                type: 1,
                title: "Name",
              },
              {
                type: 2,
                title: "Slug",
              },
              {
                type: 4,
                title: "Logo",
              },
              {
                type: 2,
                title: "Homepage",
              },
              {
                type: 6,
                title: "Domain Name",
              },
              {
                type: 5,
                title: "Cats",
              },
              {
                type: 7,
                title: "Deeplink",
              },
              {
                type: 9,
                title: "Cashback Enabled",
              },
              {
                type: 7,
                title: "Cahsback Percent",
              },
              {
                type: 7,
                title: "Cashback Type",
              },
              {
                type: 3,
                title: "Tracking Speed",
              },
              {
                type: 6,
                title: "Confirm Duration",
              },
              {
                type: 9,
                title: "Is Claimable",
              },
              {
                type: 9,
                title: "Is Shareable",
              },
              {
                type: 10,
                title: "Is Featured",
              },
              {
                type: 10,
                title: "Exclude Sitemap",
              },
              {
                type: 11,
                title: "Network",
              },
              {
                type: 5,
                title: "Network Campaign Id",
              },
              {
                type: 9,
                title: "Ghost",
              },
              {
                type: 12,
                title: "Status",
                checkBox1:'Publish',
                checkBox2:'Draft',
                checkBox3:'trash'
              },
            ],
          },
          {
            widthPercentage: 47,
            title: "Additional information",
            elements: [
              {
                type: 3,
                title: "H1",
              },
              {
                type: 3,
                title: "H2",
              },
              {
                type: 3,
                title: "Meta Title",
              },
              {
                type: 3,
                title: "Meta Desc",
              },
              {
                type: 5,
                title: "Meta Kw",
              },
              {
                type: 8,
                title: "Terms Todo",
              },
              {
                type: 8,
                title: "Terms Not Todo",
              },  
              {
                type: 8,
                title: "About",
              },  
              {
                type: 8,
                title: "Tips",
              },  
            ],
          },
        ],
      };
      return (
        <AdminComponent routes={params}
          form={<CustomizableForm  formProperties={formProperties} />}
        />
      );
    }
    return <AdminComponent routes={params} tableData={tableData} />;
  }

 else {
    return <AdminComponent routes={params} tableData={tableData} />;
  }
}

export default Admin;
//routes to determine the desscriptions to be rendered
