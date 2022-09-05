import React from "react";
import AdminComponent from "../../components/adminPart/AdminComponent";
import { useRouter } from "next/router";
import TabbedComponent from "../../components/adminPart/TabbedComponent";
import CustomizableForm from "../../components/adminPart/CustomizableForm";
import MenuBuilder from "../../components/adminPart/MenuGenerator";
const affiliate_network_keys = [
 'Name',
 "Affiliate Id",
 "Confirm Duration",
 "Enabled",
 "Default Currnecy",
 "Updated At"
];
const store_cashback_keys = [
  "address",
  "cashback_method",
  "city",
  "country",
  "paypal_email",
  "state",
  "user_id",
  "venmo_username",
  "zip",
];
const store_categories_keys = [
  "category_url",
  "description",
  "meta_description",
  "meta_keywords",
  "name",
  "parent_id",
  "show_in_menu",
  "slug",
  "sort_order",
];
const coupon_keys = [
  "added",
  "code",
  "coupon_end_date",
  "description",
  "end_date",
  "exclusive",
  "link",
  "retailer_id",
  "sort_order",
  "start_date",
  "status",
  "title",
  "trending_sale",
  "user_id",
  "viewed",
];
const retailer_to_category_keys = [
  "category_id",
  "category_on_top",
  "country_id",
  "retailer_id",
];

const campaign_keys = [
  "Network",
  "Network Campagin Id",
  "Campaign Name",
  "Campaign Status",
  "Status",
  "Updated At"
];

const page_content_keys=[
  "description",
  "language",
  "link_title",
  "meta_description",
  "meta_keywords",
  "modified",
  "name",
  "page_location",
  "page_url",
  "status"
]
const content_block_keys=[
  'Name',
  'Purpose',
  'Updated At'
]

const user_dashboard_page_keys=[
  "Module",
  "title",
  "Menu Name",
  "Sort Order",
  "Enabled"
]
const daily_deal_keys=[
  'title',
  'store',
  'offer price',
  'is featured',
  'expiry date',
  'clicks',
  'visits',
  'status',
  'updated at'
]
const deals_category_keys=[
  'name',
  'is featured',
  'visits',
  'updated at'
]

const instaback_offer_keys=[
  'title',
  'link',
  'status',
  'updated at'
]

const footer_keys=[
  'Title',
  'Footer Type',
  'Sort Order'
]

const faq_keys=[
  'Title',
  'Category',
  'Sort Order',
  'Updated At'
]
const faq_category_keys=[
  'Title',
  'link',
  'Updated At'
]

const campaign_rate_keys=[
  'Network',
  "Network Campagn Id",
  "Campaign Id",
  "Name",
  "Type",
  "Amount",
  "Base Amount",
  "Currency",
  "Updated At"
]
const postback_log_keys=[
  "Network",
  "Network Campaign",
  "Sales Date",
  "Base Commission",
  "Currency",
  "Sale Status",
  "Aff Sub1",
  "Updated At"
]

const network_run_keys=[
  "Network",
  "Type",
  "Entries",
  "Start Time",
  "End Time"
]
const network_coupon_keys=[
  "Network Id",
  "Title",
  "Initialize",
  "Exclusive",
  "Updated At"
]

const network_api_log_keys=[
  "Network",
  "Endpoint",
  "Request Method",
  "Url",
  "Response Status",
  "Updated At"
]

const manual_sales_import_keys=[
  "Network Id",
  "Network Campaign",
  "Transaction Id",
  "Sale Date",
  "Base Commission",
  "Currency",
  "Status",
  "Aff Sub1",
  "Updated At",
  
]

const click_log_keys=[
  "Click Id",
  "Click Code",
  "Click Time",
  "Store",
  "User",
  "Cashback Enabled",
  "Cashback Percent",
  "Referral Percent",
  "Can Claim",
  "User Cashback Id",
  "Source Type",
  "Source Id",
  "Ip Address",
  "Http Referrer"
]

const custom_condition_keys=[
  "Store",
  "Minimun Order Amount",
  "Cashback Amount",
  "Start Date",
  "End Date",
  "Enabled",
  "Priority",
  "Updated At"
]
const sales_transaction_keys=[
  "Network",
  "Network Campaign Id",
  "Transaction Id",
  "Sale Date",
  "Commission Amount",
  "Currency",
  "Status",
  "Aff1 Sub1"
]

const referral_transaction_keys=[
  "Sales Id",
  "User",
  "Shooper",
  "Store",
  "Referral Amount",
  "Currency",
  "Status",
  "Updated At"
]


const cashback_transaction_keys=[
  "user",
  "Network",
  "Store",
  "Cashback",
  "Currency",
  "Status",
  "Lock Cashback Status",
  "Lock Cashback Amount",
]

const bonus_transaction_keys=[
  "User",
  "Bonus",
  "Amount",
  "Awarded On",
  "Expires On",
  "Status",
  "Updated At"
]

const payment_mode_keys=[
  "Name",
  "Minimun Amount",
  "Minimum Amount First",
  "Cashback Allowed",
  "Reward Allowed",
  "Image",
  "Account Name",
  "Payment Speed",
  "Enabled",
  "Updatet At"
]
const user_keys=[
  "User Id",
  "Email",
  "Referral Percent",
  "Can Share Earn",
  "Banned",
  "Can Refer And Earn",
  "Created At",
  "Cashback"
]
const missing_cb_claim_keys=[
  "User",
  "Click Id",
  "Store",
  "Click Time",
  "Order Amount",
  "Status",
  "Closed By",
  "Updated At",
  "Platform",
  "Transaction Date ",
  "Order Id",
  "Order Amount",
  "Currency",
  "User Message",
  "Admin Note"
]
const withdrawal_request_keys=[
  "Payment Id",
  "User",
  "Method Code",
  "Account",
  "Amount",
  "Status",
  "Note",
  "Paid At",
  "Updated At"
]

const user_favorite_keys=[
  "Id",
  "Name",
  "Users List"
]

const share_earn_link_keys=[
  "User",
  "Code",
  "Store",
  "Clicks",
  "Earnings",
  "Created At"
]

const contact_form_keys=[
  "Name",
  "Email",
  "Reason",
  "Updated At"
]
const tableRows = [
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
];

const makeTableData = (model) => {
  const tableData = {
    tableHeader: {
      columns: model,
      dataOnly: model,
    },
    tableRows,
  };
  return tableData;
};
const makeForm = (model, data) => {
  const formProperties = {
    formSections: [
      {
        title: "Stores",
        elements: [],
      },
    ],
  };
  model.forEach((element) => {
    const files = ["photo", "Image", "logo"];
    const dropDowns = ["category", "country","Store","User"];
    const toggles=['banned']
    const checkBoxes=['Closed By',"Platform"]
    const textAreas=[ "User Message","Admin Note"]
    const notTranslatable = ["url","Users List","Earnings","Clicks","Code","Method Code","Account",'Url',"Email","Cashback","Currency",'Endpoint','Request Method',"Minimum Amount First",'page_url', "page", "slug",'Response Status',"Referral Percent",
    "Source Type",
    "Source Id",
    "Ip Address",
    "Http Referrer"];
    if (files.includes(element)) {
      formProperties.formSections[0].elements.push({
        title: element,
        type: 4,
      });
    } else if (element.slice(-6) == "Status" || checkBoxes.includes(element) ) {
      formProperties.formSections[0].elements.push({
        title: element,
        type: 12,
        checkBox1: "Publish",
        checkBox2: "Draft",
        checkBox3: "trash",
      });
    } else if (dropDowns.includes(element)) {
      formProperties.formSections[0].elements.push({
        title: element,
        type: 11,
      });
      
    } else if (element.slice(-3) == "able" || element.slice(-5) == "abled" || element.slice(-3) == "red" || element.slice(0,3) == "Can" || element.slice(-7) == "Allowed"|| toggles.includes(element)) {
      formProperties.formSections[0].elements.push({
        title: element,
        type: 9,
      });
    } 
    else if (element.slice(-4) == "time" || element.slice(-4) == "Time" || element.slice(-4) == "Date") {
      formProperties.formSections[0].elements.push({
        title: element,
        type: 13,
      });
    } 
    else if (notTranslatable.includes(element) || element.slice(-2) == "Id" || element.slice(-2) == "At"   || element.slice(-6) == "Amount") {
      formProperties.formSections[0].elements.push({
        title: element,
        type: 2,
      });
    }
    else if (textAreas.includes(element)) {
      formProperties.formSections[0].elements.push({
        title: element,
        type: 14,
      });
    }
    
    else {
      formProperties.formSections[0].elements.push({
        title: element,
        type: 1,
      });
    }
  });

  return formProperties;
};

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

  if (params[0] == "affiliate_networks") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(affiliate_network_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(affiliate_network_keys)}
      />
    );
  }
  if (params[0] == "store_cashback") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm formProperties={makeForm(store_cashback_keys)} />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(store_cashback_keys)}
      />
    );
  }
  if (params[0] == "store_categories") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(store_categories_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(store_categories_keys)}
      />
    );
  }
  if (params[0] == "coupon_&_offers") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={<CustomizableForm formProperties={makeForm(coupon_keys)} />}
        />
      );
    }

    return (
      <AdminComponent routes={params} tableData={makeTableData(coupon_keys)} />
    );
  }
  if (params[0] == "offer_categories") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(retailer_to_category_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(retailer_to_category_keys)}
      />
    );
  }
  if (params[0] == "daily_deals") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(daily_deal_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(daily_deal_keys)}
      />
    );
  }
  if (params[0] == "deals_categories") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(deals_category_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(deals_category_keys)}
      />
    );
  }
  if (params[0] == "campaign_master") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(campaign_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(campaign_keys)}
      />
    );
  }
  if (params[0] == "pages") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(page_content_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(page_content_keys)}
      />
    );
  }
  if (params[0] == "menu_builder") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <MenuBuilder
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(content_block_keys)}
      />
    );
  }
  if (params[0] == "content_blocks") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(content_block_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(content_block_keys)}
      />
    );
  }
  if (params[0] == "instaback_offers") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(instaback_offer_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(instaback_offer_keys)}
      />
    );
  }
  if (params[0] == "user_dashboard_pages") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(user_dashboard_page_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(user_dashboard_page_keys)}
      />
    );
  }
  if (params[0] == "footer") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(footer_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(footer_keys)}
      />
    );
  }
  if (params[0] == "faq") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(faq_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(faq_keys)}
      />
    );
  }
  if (params[0] == "faq_categories") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(faq_category_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(faq_category_keys)}
      />
    );
  }
  if (params[0] == "campaign_rates") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(campaign_rate_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(campaign_rate_keys)}
      />
    );
  }
  if (params[0] == "postback_log") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(postback_log_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(postback_log_keys)}
      />
    );
  }
  if
   (params[0] == "network_run") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(network_run_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(network_run_keys)}
      />
    );
  }
  if
   (params[0] == "network_coupons") {
    if (params[1] == "form") {
      return (
        <AdminComponent
          routes={params}
          form={
            <CustomizableForm
              formProperties={makeForm(network_coupon_keys)}
            />
          }
        />
      );
    }

    return (
      <AdminComponent
        routes={params}
        tableData={makeTableData(network_coupon_keys)}
      />
    );
  }
  if
  (params[0] == "network_api_log") {
   if (params[1] == "form") {
     return (
       <AdminComponent
         routes={params}
         form={
           <CustomizableForm
             formProperties={makeForm(network_api_log_keys)}
           />
         }
       />
     );
   }

   return (
     <AdminComponent
       routes={params}
       tableData={makeTableData(network_api_log_keys)}
     />
   );
 }
 if
 (params[0] == "manual_sales_import") {
  if (params[1] == "form") {
    return (
      <AdminComponent
        routes={params}
        form={
          <CustomizableForm
            formProperties={makeForm(manual_sales_import_keys)}
          />
        }
      />
    );
  }

  return (
    <AdminComponent
      routes={params}
      tableData={makeTableData(manual_sales_import_keys)}
    />
  );
}
if
(params[0] == "click_log") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(click_log_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(click_log_keys)}
   />
 );
}
if
(params[0] == "custom_conditions") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(custom_condition_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(custom_condition_keys)}
   />
 );
}
if
(params[0] == "sales_transactions") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(sales_transaction_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(sales_transaction_keys)}
   />
 );
}
if
(params[0] == "referral_transactions") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(referral_transaction_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(referral_transaction_keys)}
   />
 );
}
if
(params[0] == "cashback_transactions") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(cashback_transaction_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(cashback_transaction_keys)}
   />
 );
}
if
(params[0] == "bonus_transactions") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(bonus_transaction_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(bonus_transaction_keys)}
   />
 );
}

if
(params[0] == "payment_modes") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(payment_mode_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(payment_mode_keys)}
   />
 );
}
if
(params[0] == "users") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(user_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(user_keys)}
   />
 );
}

if
(params[0] == "missing_cb_claims") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(missing_cb_claim_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(missing_cb_claim_keys)}
   />
 );
}
if
(params[0] == "withdrawal_requests") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(withdrawal_request_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(withdrawal_request_keys)}
   />
 );
}
if
(params[0] == "user_favorites") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(user_favorite_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(user_favorite_keys)}
   />
 );
}
if
(params[0] == "share_&_earn_links") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(share_earn_link_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(share_earn_link_keys)}
   />
 );
}

if
(params[0] == "contact_form") {
 if (params[1] == "form") {
   return (
     <AdminComponent
       routes={params}
       form={
         <CustomizableForm
           formProperties={makeForm(contact_form_keys)}
         />
       }
     />
   );
 }

 return (
   <AdminComponent
     routes={params}
     tableData={makeTableData(contact_form_keys)}
   />
 );
}
if
(params[0] == "settings") {
   return (
     <AdminComponent
       routes={params}
       form={
         <TabbedComponent
         />
       }
     />
   );


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
                checkBox1: "Publish",
                checkBox2: "Draft",
                checkBox3: "trash",
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
        <AdminComponent
          routes={params}
          form={<CustomizableForm formProperties={formProperties} />}
        />
      );
    }
    return <AdminComponent routes={params} tableData={tableData} />;
  } else {
    return <AdminComponent routes={params} tableData={tableData} />;
  }
}

export default Admin;
//routes to determine the desscriptions to be rendered
