import React, { useEffect, useState } from "react";
import AdminComponent from "../../components/adminPart/AdminComponent";
import { useRouter } from "next/router";
import TabbedComponent from "../../components/adminPart/TabbedComponent";
import CustomizableForm from "../../components/adminPart/CustomizableForm";
import MenuBuilder from "../../components/adminPart/MenuGenerator";
import { useSelector } from "react-redux";
import {
  selectSelectedObjectKeys,
  selectSelectedFormData,
} from "../../utils/redux/slices/selectingSlice";
import ViewDocument from "../../components/adminPart/ViewDocument";
import AdminDashboard from "../../components/adminPart/AdminDashboard";
const affiliate_network_keys = [
  "Program Id",
  "Name",
  "Csv_format",
  "Post_back",
  "Confirmeds",
  "Pendings",
  "Declineds",
  "Website",
  "Image",
  "Last_csv_upload",
  "Enabled",
  "createdAt",
  "updatedAt",
];
const store_cashback_keys = ["Store", "User Id", "Amount", "Product Id"];
const store_keys = [
  "Name",
  "Slug",
  "Logo",
  "Homepage",
  "Domain Name",
  "DeepLink",
  "Cashback Enabled",
  "Cashback Percent",
  "Cashback Type",
  "Tracking Speed",
  "Confirm Duration",
  "Is Claimable",
  "Is Shearable",
  "Exclude Sitemap",
  "Network",
  "Network Campaign Id",
  "Ghost",
  "H1",
  "H2",
  "Meta Title",
  "Meta Desc",
  "Meta Kw",
  "Terms Tod",
  "Terms Not Todo",
  "About",
  "Tips",
  "Visits",
  "createdAt",
  "updatedAt",
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
  "createdAt",
  "updatedAt",
];
const coupon_keys = [
  "Title",
  "Coupon End Date",
  "Description",
  "Code",
  "Link",
  "Store Id",
  "Status",
  "trending_sale",
  "viewed",
  "createdAt",
  "updatedAt",
];
const retailer_to_category_keys = [
  "category_id",
  "category_on_top",
  "country_id",
  "retailer_id",
  "createdAt",
  "updatedAt",
];

const campaign_keys = [
  "Network",
  "Network Campagin Id",
  "Campaign Name",
  "Campaign Status",
  "Status",
  "createdAt",
  "updatedAt",
];

const page_content_keys = [
  "description",
  "language",
  "link_title",
  "meta_description",
  "meta_keywords",
  "modified",
  "name",
  "page_location",
  "page_url",
  "status",
  "createdAt",
  "updatedAt",
];
const content_block_keys = ["Name", "Purpose", "Updated At"];

const user_dashboard_page_keys = [
  "Module",
  "title",
  "Menu Name",
  "Sort Order",
  "Enabled",
  "createdAt",
  "updatedAt",
];
const daily_deal_keys = [
  "title",
  "store",
  "offer price",
  "is featured",
  "expiry date",
  "clicks",
  "visits",
  "status",
  "createdAt",
  "updatedAt",
];
const deals_category_keys = [
  "name",
  "is featured",
  "visits",
  "createdAt",
  "updatedAt",
];

const instaback_offer_keys = [
  "title",
  "link",
  "status",
  "createdAt",
  "updatedAt",
];

const footer_keys = ["Title", "Footer Type", "Sort Order"];

const faq_keys = ["Title", "Category", "Sort Order", "createdAt", "updatedAt"];
const faq_category_keys = ["Title", "link", "createdAt", "updatedAt"];

const campaign_rate_keys = [
  "Network",
  "Network Campagn Id",
  "Campaign Id",
  "Name",
  "Type",
  "Amount",
  "Base Amount",
  "Currency",
  "createdAt",
  "updatedAt",
];
const postback_log_keys = [
  "Network",
  "Network Campaign",
  "Sales Date",
  "Base Commission",
  "Currency",
  "Sale Status",
  "Aff Sub1",
  "createdAt",
  "updatedAt",
];

const network_run_keys = [
  "Network",
  "Type",
  "Entries",
  "Start Time",
  "End Time",
];
const network_coupon_keys = [
  "Network Id",
  "Title",
  "Initialize",
  "Exclusive",
  "createdAt",
  "updatedAt",
];

const network_api_log_keys = [
  "Network",
  "Endpoint",
  "Request Method",
  "Url",
  "Response Status",
  "createdAt",
  "updatedAt",
];

const manual_sales_import_keys = [
  "Network Id",
  "Network Campaign",
  "Transaction Id",
  "Sale Date",
  "Base Commission",
  "Currency",
  "Status",
  "Aff Sub1",
  "createdAt",
  "updatedAt",
];

const click_log_keys = [
  "Store",
  "User",
  "Cashback Enabled",
  "Cashback Percent",
  "Referral Percent",
  "User Cashback Id",
  "Ip Address",
  "Http Referrer",
];

const custom_condition_keys = [
  "Store",
  "Minimun Order Amount",
  "Cashback Amount",
  "Start Date",
  "End Date",
  "Enabled",
  "Priority",
  "createdAt",
  "updatedAt",
];
const sales_transaction_keys = [
  "Network",
  "Network Campaign Id",
  "Transaction Id",
  "Sale Date",
  "Commission Amount",
  "Currency",
  "Status",
  "Aff1 Sub1",
];

const referral_transaction_keys = [
  "Sales Id",
  "User",
  "Shooper",
  "Store",
  "Referral Amount",
  "Currency",
  "Status",
  "createdAt",
  "updatedAt",
];

const cashback_transaction_keys = [
  "user",
  "Network",
  "Store",
  "Cashback",
  "Currency",
  "Status",
  "Lock Cashback Status",
  "Lock Cashback Amount",
];

const bonus_transaction_keys = [
  "User",
  "Bonus",
  "Amount",
  "Awarded On",
  "Expires On",
  "Status",
  "createdAt",
  "updatedAt",
];

const payment_mode_keys = [
  "Name",
  "Minimun Amount",
  "Minimum Amount First",
  "Cashback Allowed",
  "Reward Allowed",
  "Image",
  "Account Name",
  "Payment Speed",
  "Enabled",
  "createdAt",
  "updatedAt",
];
const user_keys = [
  "Email",
  "Referral Percent",
  "Can Share Earn",
  "Banned",
  "Can Refer And Earn",
  "Cashback",
  "createdAt",
  "updatedAt",
];
const missing_cb_claim_keys = [
  "User",
  "Click Id",
  "Store",
  "Click Time",
  "Order Amount",
  "Status",
  "Closed By",
  "Platform",
  "Transaction Date ",
  "Order Id",
  "Currency",
  "User Message",
  "Admin Note",
  "createdAt",
  "updatedAt",
];
const withdrawal_request_keys = [
  "Payment Id",
  "User",
  "Method Code",
  "Account",
  "Amount",
  "Status",
  "Note",
  "Paid At",
  "createdAt",
  "updatedAt",
];

const user_favorite_keys = ["Id", "Name", "Users List"];

const share_earn_link_keys = [
  "User",
  "Code",
  "Store",
  "Clicks",
  "Earnings",
  "createdAt",
  "updatedAt",
];

const contact_form_keys = ["Name", "Email", "Reason", "createdAt", "updatedAt"];

const seo_url_redirect_keys = [
  "Old Url",
  "New Url",
  "Status",
  "createdAt",
  "updatedAt",
];
const email_template_keys = [
  "Name",
  "Subject",
  "Template",
  "View Name",
  "createdAt",
  "updatedAt",
];

const sitemap_keys = [
  "Module",
  "Slug",
  "Frequency",
  "Priority",
  "Enabled",
  "createdAt",
  "updatedAt",
];
const currency_master_keys = [
  "Name",
  "Iso Code",
  "Symbol",
  "Conversion Rate",
  "Enabled",
  "Is Primary",
  "Dispal As",
  "createdAt",
  "updatedAt",
];

const country_master_keys = [
  "Name",
  "Dial Code",
  "Code",
  "Enable OTP",
  "Enabled",
  "createdAt",
  "updatedAt",
];
const language_master_keys = [
  "Id",
  "Name",
  "Code",
  "Enabled",
  "createdAt",
  "updatedAt",
];

const makeTableData = (model, tableDataRows) => {
  const tableData = {
    tableHeader: {
      columns: model,
      dataOnly: model,
    },
    tableRows: tableDataRows,
  };
  console.log("TableData===", tableData);
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
    const dropDowns = [
      "category",
      "country",
      "Store",
      "User",
      "Networks",
      "Store Id",
    ];
    const toggles = ["Banned"];
    const checkBoxes = ["Closed By", "Platform"];
    const textAreas = ["User Message", "Admin Note"];
    const notTranslatable = [
      "Link",
      "url",
      "Iso Code",
      "Dial Code",
      "Conversion Rate",
      "Symbol",
      "Users List",
      "Earnings",
      "Website",
      "Declineds",
      "Pendings",
      "COnfirmeds",
      "Post_back",
      "Csv_format",
      "Declineds",
      "Clicks",
      "Code",
      "Method Code",
      "Account",
      "Url",
      "Email",
      "Cashback",
      "Currency",
      "Endpoint",
      "Frequency",
      "Module",
      "View Name",
      "Template",
      "Request Method",
      "Minimum Amount First",
      "page_url",
      "Page",
      "Priority",
      "Slug",
      "Response Status",
      "Referral Percent",
      "Source Type",
      "Source Id",
      "Ip Address",
      "Confirmeds",
      "Http Referrer",
    ];
    if (
      element != "createdAt" &&
      element != "updatedAt" &&
      element != "Last_csv_upload"
    ) {
      if (files.includes(element)) {
        formProperties.formSections[0].elements.push({
          title: element,
          type: 4,
        });
      } else if (
        element.slice(-6) == "Status" ||
        checkBoxes.includes(element)
      ) {
        formProperties.formSections[0].elements.push({
          title: element,
          type: 12,
          checkBox1: "Active",
          checkBox2: "Not Active",
        });
      } else if (dropDowns.includes(element)) {
        formProperties.formSections[0].elements.push({
          title: element,
          type: 11,
        });
      } else if (
        element.slice(-3) == "able" ||
        element.slice(-5) == "abled" ||
        element.slice(0, 3) == "Is " ||
        element.slice(-3) == "red" ||
        element.slice(0, 6) == "Enable" ||
        element.slice(0, 3) == "Can" ||
        element.slice(-7) == "Allowed" ||
        toggles.includes(element)
      ) {
        formProperties.formSections[0].elements.push({
          title: element,
          type: 9,
        });
      } else if (
        element.slice(-4) == "time" ||
        element.slice(-4) == "Time" ||
        element.slice(-4) == "Date"
      ) {
        formProperties.formSections[0].elements.push({
          title: element,
          type: 13,
        });
      } else if (
        notTranslatable.includes(element) ||
        element.slice(-2) == "Id" ||
        element.slice(-3) == "Url" ||
        element.slice(-6) == "Amount"
      ) {
        formProperties.formSections[0].elements.push({
          title: element,
          type: 2,
        });
      } else if (textAreas.includes(element)) {
        formProperties.formSections[0].elements.push({
          title: element,
          type: 14,
        });
      } else {
        formProperties.formSections[0].elements.push({
          title: element,
          type: 1,
        });
      }
    }
  });

  return formProperties;
};


function Admin() {
  const selected_form_data = useSelector(selectSelectedFormData);
  const selected_object_keys = useSelector(selectSelectedObjectKeys);
  const router = useRouter();
  const [dashboardData,setDashboardData] = useState()
  const [document, setDocument] = useState();
  const { params = [] } = router.query;
  const [dbData, setDbData] = useState();
  console.log("/api/", params[0]);
  useEffect(() => {
    const fetchData = async () => {
      if(params.length==0){
        await fetch('api/admin_dashboard',{method: "GET"}).then(res=>res.json()).then(data=>setDashboardData(data))
      }
      else{

        const route = params[0];
        if (route) {
        if (route.length === 24) {
          if (params[params.length - 2] == "edit") {
            await fetch(`api/${params[params.length - 2]}/${route}`)
              .then((res) => res.json())
              .then((data) => setDocument(data));
            } else {
              await fetch(`api/${params[params.length - 1]}/${route}`)
              .then((res) => res.json())
              .then((data) => setDocument(data));
          }
        } else {
          await fetch(`/api/${route}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
              setDbData(data);
              console.log("=======================", data);
            });
          }
        }
      }
    };
    fetchData();
  }, [params]);
  if(params.length===0){
    return (
      <AdminComponent
        routes={params}
        dashboard={<AdminDashboard dashboardData={dashboardData} />}
      />)
  }
  else{

    if (dbData) {
      if (params[params.length - 1].length === 24) {
        if (params[params.length - 2] == "edit") {
          return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                editFormData={selected_form_data}
                formProperties={makeForm(selected_object_keys)}
              />
            }
          />
        );
      }
      else {
        return (
          <AdminComponent
          routes={params}
          viewDocument={
            <ViewDocument
            routes={params}
              document={selected_form_data}
              objectKeys={selected_object_keys}
            />
          }
        />
      );
    } 
    }
    if (params[0] == "affiliate_networks") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(affiliate_network_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(affiliate_network_keys, dbData)}
          objectKeys={affiliate_network_keys}
        />
      );
    }
    if (params[0] == "store_cashback") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(store_cashback_keys)}
              />
            }
          />
        );
      }

      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(store_cashback_keys, dbData)}
          objectKeys={store_cashback_keys}
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
                routes={params}
                formProperties={makeForm(store_categories_keys, dbData)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(store_categories_keys, dbData)}
          objectKeys={store_categories_keys}
        />
      );
    }
    if (params[0] == "coupon_&_offers") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(coupon_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(coupon_keys, dbData)}
          objectKeys={coupon_keys}
        />
      );
    }
    if (params[0] == "offer_categories") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(retailer_to_category_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(retailer_to_category_keys, dbData)}
          objectKeys={retailer_to_category_keys}
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
                routes={params}
                formProperties={makeForm(daily_deal_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(daily_deal_keys, dbData)}
          objectKeys={daily_deal_keys}
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
                routes={params}
                formProperties={makeForm(deals_category_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(deals_category_keys, dbData)}
          objectKeys={deals_category_keys}
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
                routes={params}
                formProperties={makeForm(campaign_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(campaign_keys, dbData)}
          objectKeys={campaign_keys}
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
                routes={params}
                formProperties={makeForm(page_content_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(page_content_keys, dbData)}
          objectKeys={page_content_keys}
        />
      );
    }
    if (params[0] == "menu_builder") {
      if (params[1] == "form") {
        return <AdminComponent routes={params} form={<MenuBuilder />} />;
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(content_block_keys, dbData)}
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
                routes={params}
                formProperties={makeForm(content_block_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(content_block_keys, dbData)}
          objectKeys={content_block_keys}
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
                routes={params}
                formProperties={makeForm(instaback_offer_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(instaback_offer_keys, dbData)}
          objectKeys={instaback_offer_keys}
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
                routes={params}
                formProperties={makeForm(user_dashboard_page_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(user_dashboard_page_keys, dbData)}
          objectKeys={user_dashboard_page_keys}
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
                routes={params}
                formProperties={makeForm(footer_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(footer_keys, dbData)}
          objectKeys={footer_keys}
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
                routes={params}
                formProperties={makeForm(faq_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(faq_keys, dbData)}
          objectKeys={faq_keys}
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
                routes={params}
                formProperties={makeForm(faq_category_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(faq_category_keys, dbData)}
          objectKeys={faq_category_keys}
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
                routes={params}
                formProperties={makeForm(campaign_rate_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(campaign_rate_keys, dbData)}
          objectKeys={campaign_rate_keys}
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
                routes={params}
                formProperties={makeForm(postback_log_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(postback_log_keys, dbData)}
          objectKeys={postback_log_keys}
        />
      );
    }
    if (params[0] == "network_run") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(network_run_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(network_run_keys, dbData)}
          objectKeys={network_run_keys}
        />
      );
    }
    if (params[0] == "network_coupons") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(network_coupon_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(network_coupon_keys, dbData)}
          objectKeys={network_coupon_keys}
        />
      );
    }
    if (params[0] == "network_api_log") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(network_api_log_keys)}
              />
            }
          />
        );
      }

      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(network_api_log_keys, dbData)}
          objectKeys={network_api_log_keys}
        />
      );
    }
    if (params[0] == "manual_sales_import") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(manual_sales_import_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(manual_sales_import_keys, dbData)}
          objectKeys={manual_sales_import_keys}
        />
      );
    }
    if (params[0] == "click_log") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(click_log_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(click_log_keys, dbData)}
          objectKeys={click_log_keys}
        />
      );
    }
    if (params[0] == "custom_conditions") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(custom_condition_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(custom_condition_keys, dbData)}
          objectKeys={custom_condition_keys}
        />
      );
    }
    if (params[0] == "sales_transactions") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(sales_transaction_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(sales_transaction_keys, dbData)}
          objectKeys={sales_transaction_keys}
        />
      );
    }
    if (params[0] == "referral_transactions") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(referral_transaction_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(referral_transaction_keys, dbData)}
          objectKeys={referral_transaction_keys}
        />
      );
    }
    if (params[0] == "cashback_transactions") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(cashback_transaction_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(cashback_transaction_keys, dbData)}
          objectKeys={cashback_transaction_keys}
        />
      );
    }
    if (params[0] == "bonus_transactions") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(bonus_transaction_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(bonus_transaction_keys, dbData)}
          objectKeys={bonus_transaction_keys}
        />
      );
    }

    if (params[0] == "payment_modes") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(payment_mode_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(payment_mode_keys, dbData)}
          objectKeys={payment_mode_keys}
        />
      );
    }
    if (params[0] == "users") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(user_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(user_keys, dbData)}
          objectKeys={user_keys}
        />
      );
    }
    
    if (params[0] == "missing_cb_claims") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(missing_cb_claim_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(missing_cb_claim_keys, dbData)}
          objectKeys={missing_cb_claim_keys}
        />
      );
    }
    if (params[0] == "withdrawal_requests") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(withdrawal_request_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(withdrawal_request_keys, dbData)}
          objectKeys={withdrawal_request_keys}
        />
      );
    }
    if (params[0] == "user_favorites") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(user_favorite_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(user_favorite_keys, dbData)}
          objectKeys={user_favorite_keys}
        />
      );
    }
    if (params[0] == "share_&_earn_links") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(share_earn_link_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(share_earn_link_keys, dbData)}
        />
      );
    }
    
    if (params[0] == "contact_form") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(contact_form_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(contact_form_keys, dbData)}
          objectKeys={contact_form_keys}
        />
      );
    }
    if (params[0] == "settings") {
      return <AdminComponent routes={params} form={<TabbedComponent />} />;
    }
    
    if (params[0] == "seo_url_redirect") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(seo_url_redirect_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(seo_url_redirect_keys, dbData)}
          objectKeys={seo_url_redirect_keys}
        />
      );
    }

    if (params[0] == "email_templates") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(email_template_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(email_template_keys, dbData)}
          objectKeys={email_template_keys}
        />
      );
    }
    if (params[0] == "sitemap") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(sitemap_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(sitemap_keys, dbData)}
          objectKeys={sitemap_keys}
        />
      );
    }

    if (params[0] == "currency_master") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(currency_master_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(currency_master_keys, dbData)}
          objectKeys={currency_master_keys}
        />
      );
    }
    
    if (params[0] == "country_master") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(country_master_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(country_master_keys, dbData)}
          objectKeys={country_master_keys}
        />
      );
    }
    if (params[0] == "language_master") {
      if (params[1] == "form") {
        return (
          <AdminComponent
            routes={params}
            form={
              <CustomizableForm
                routes={params}
                formProperties={makeForm(language_master_keys)}
              />
            }
          />
        );
      }
      
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(language_master_keys, dbData)}
          objectKeys={language_master_keys}
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
                  title: "Cashback Percent",
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
            form={
              <CustomizableForm
                routes={params}
                formProperties={formProperties}
              />
            }
          />
        );
      }
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(store_keys, dbData)}
          objectKeys={store_keys}
        />
      );
    } else {
      return (
        <AdminComponent
          routes={params}
          tableData={makeTableData(store_keys, dbData)}
          objectKeys={store_keys}
        />
      );
    }
  }
  }
}

export default Admin;
//routes to determine the desscriptions to be rendered
