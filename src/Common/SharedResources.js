export const baseURL = "http://10.91.50.38:8080/";

export const data = [
  {
    categoryId: 1,
    categoryName: "Workday",
    parentCategory: 0,
    categoryDescription: "Workday HRIS",
    icon: "Work",
    questionsAndAnswers: [
      {
        id: 1,
        question: "What are the working hours?",
        answer: "The working hours are from 9 AM to 6 PM.",
        yesCount: 0,
        noCount: 0,
        link: null,
      },
    ],
    subcategories: [
      {
        categoryId: 3,
        categoryName: "Employee Profile",
        parentCategory: 1,
        categoryDescription: "Workday Employee Profile",
        icon: "Workday Logo",
        questionsAndAnswers: [],
        subcategories: [
          {
            categoryId: 5,
            categoryName: "Awating Action on workday",
            parentCategory: 3,
            categoryDescription: "Employee to Awating Action on workday",
            icon: null,
            questionsAndAnswers: [
              {
                id: 2,
                question: "How can I check my Awating Action on workday?",
                answer: "Workday Home ->Awating Action on workday (Inbox Item)",
                yesCount: 0,
                noCount: 0,
                link: null,
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 6,
            categoryName: "Employee Profile Update",
            parentCategory: 3,
            categoryDescription: "Employee profile update process in Workday",
            icon: null,
            questionsAndAnswers: [
              {
                id: 3,
                question: "How can I update my Primary Address in Workday?",
                answer:
                  "Workday Profile ->Actions -> Personal Data -> Change Contact Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 4,
                question:
                  "How can I update my Primary Phone Number on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change Contact Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 5,
                question: "How can I update my Additional Address on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change Contact Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 6,
                question: "How can I update my Gender on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information.",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 7,
                question: "How can I update my Marital Status on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information. (Supporting documnet requier)",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 8,
                question:
                  "How can I update the date in Marital Status on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 9,
                question: "How can I update my Citizenship Status on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information. (Supporting documnet requier)",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 11,
                question: "How can I update my Sexual Oreintation on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 12,
                question: "How can I update my Gender Identitiy on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 14,
                question: "How can I update my Blood Group on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 15,
                question: "How can I update my Disability on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information. (Supporting documnet requier)",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 16,
                question: "How can I change My Photo on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Photo",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 17,
                question: "How can I delete My Photo on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Photo",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 18,
                question: "How can I change my Legal Name on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Legal Name (Supporting documnet requier)",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 19,
                question: "How can I change my preferred name on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Preferred Name",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 20,
                question: "How can I change my name pronounciation on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> ChangeMy Name Pronunciation",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 23,
                question: "How can I view ID Information on Workday?",
                answer: "Workday Profile -> Personal Data -> IDs",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 24,
                question: "How can I update view ID Information on Workday?",
                answer: "This is Non- Editable field",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 7,
            categoryName: "Inernal Job",
            parentCategory: 3,
            categoryDescription: "Employee to apply for IJA",
            icon: null,
            questionsAndAnswers: [
              {
                id: 26,
                question: "How can I apply for IJA on workday?",
                answer: "Menu -> Career -> Find Jobs -MassMutual",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 8,
            categoryName: "Maintain Payment Elections",
            parentCategory: 3,
            categoryDescription: "Employee to update Payment Elections",
            icon: null,
            questionsAndAnswers: [
              {
                id: 21,
                question:
                  "How can I delete Bank Details (Maintain Payment Elections) on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Maintain My Payment Election",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 22,
                question:
                  "How can I update Bank Details (Maintain Payment Elections) on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Maintain My Payment Election",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 9,
            categoryName: "Pronoun",
            parentCategory: 3,
            categoryDescription: "Employee to update Pronoun",
            icon: null,
            questionsAndAnswers: [
              {
                id: 13,
                question: "How can I update my pronouns on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 10,
            categoryName: "Refer a Candidate",
            parentCategory: 3,
            categoryDescription: "Employee to Refer a Candidate",
            icon: null,
            questionsAndAnswers: [
              {
                id: 25,
                question: "How can I refer a candidate on workday?",
                answer: "Menu -> Career -> Refer a Candidate",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 11,
            categoryName: "Relative's Name - Only Father Name",
            parentCategory: 3,
            categoryDescription:
              "Employee to update Relative's Name - Only Father Name",
            icon: null,
            questionsAndAnswers: [
              {
                id: 10,
                question:
                  "How can I update my Relative's Name - Only Father's Name on Workday?",
                answer:
                  "Workday Profile -> Actions -> Personal Data -> Change My Personal Information",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 12,
            categoryName: "View Total reward",
            parentCategory: 3,
            categoryDescription: "Employee to View Total reward",
            icon: null,
            questionsAndAnswers: [
              {
                id: 27,
                question: "How can I view Total Rewards?",
                answer: "Profile -> Compensation -> Details",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
        ],
      },
      {
        categoryId: 4,
        categoryName: "Manager Profile",
        parentCategory: 1,
        categoryDescription: "Workday Manager Profile",
        icon: "Workday Logo",
        questionsAndAnswers: [],
        subcategories: [
          {
            categoryId: 13,
            categoryName: "Assign Work Schedule",
            parentCategory: 4,
            categoryDescription: "Manager to Assign Work Schedule",
            icon: null,
            questionsAndAnswers: [
              {
                id: 41,
                question: "How can I assign Work Schedule",
                answer:
                  "Menu -> Manage My Team -> General -> Select Employee -> Employee Action (\u2026) -> Time and Absence -> Assign Work Schedule",
                yesCount: 0,
                noCount: 0,
                link: null,
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 14,
            categoryName: "Change Business Title",
            parentCategory: 4,
            categoryDescription: "Manager to change business title for Team",
            icon: null,
            questionsAndAnswers: [
              {
                id: 29,
                question: "How can I change the business title for my team?",
                answer:
                  "Menu -> Manage My Team -> General ->Select Employee -> Employee Action (\u2026) -> Job Change -> Change Business Title",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 15,
            categoryName: "Change Compensation",
            parentCategory: 4,
            categoryDescription: "Manager to change Compensation for Team",
            icon: null,
            questionsAndAnswers: [
              {
                id: 30,
                question: "How can I initiate compensation for my team?",
                answer:
                  "Menu -> Manage My Team -> General -> Employee Action (\u2026) -> Job Change -> Change Worker Details -> Change Compnesation",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 16,
            categoryName: "Cost Center Change",
            parentCategory: 4,
            categoryDescription:
              "Manager to initiate Cost Centre Change for Team",
            icon: null,
            questionsAndAnswers: [
              {
                id: 32,
                question: "How can I initiate Cost Center change for my team",
                answer:
                  "Menu -> Manage My Team -> General -> Employee Action (\u2026) -> Job Change -> Change Worker Details -> Cost Center Change",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 17,
            categoryName: "Create Job Requistion",
            parentCategory: 4,
            categoryDescription: "Job Requisition Process",
            icon: null,
            questionsAndAnswers: [
              {
                id: 36,
                question: "How can I create Job Requistion",
                answer:
                  "Menu -> Manage My Team -> General -> Recruting & Contractors -> Create Job Requistion",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 37,
                question: "How can I close Job Requistion",
                answer:
                  "Menu -> Manage My Team -> General -> Recruting & Contractors -> close Job Requistion",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
              {
                id: 38,
                question: "How can I change Job Requistion",
                answer:
                  "Menu -> Manage My Team -> General -> Recruting & Contractors -> change Job Requistion",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 18,
            categoryName: "Invite to Apply",
            parentCategory: 4,
            categoryDescription: "Manager to Invite to Apply for career",
            icon: null,
            questionsAndAnswers: [
              {
                id: 39,
                question: "How can I invite application on career site",
                answer:
                  "Menu -> Manage My Team -> General -> Recruting & Contractors -> Invite to Apply",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 19,
            categoryName: "Manage My Contingent Worker",
            parentCategory: 4,
            categoryDescription: "Manager to Manage My Contingent Worker",
            icon: null,
            questionsAndAnswers: [
              {
                id: 34,
                question: "How can I inItitae other multiple change team",
                answer:
                  "Menu -> Manage My Team -> General -> Recruting & Contractors -> Manage My Contingent Worker",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 20,
            categoryName: "Matrix Manager",
            parentCategory: 4,
            categoryDescription: "Manager to update Matrix",
            icon: null,
            questionsAndAnswers: [
              {
                id: 43,
                question: "How can I assign Matrix Manager",
                answer:
                  "Please share the request on mail to POC . vpoliki26@massmutual.com and vbeamani11@massmutual.com .",
                yesCount: 0,
                noCount: 0,
                link: null,
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 21,
            categoryName: "Move to New manager",
            parentCategory: 4,
            categoryDescription: "Manager to move team to new manager",
            icon: null,
            questionsAndAnswers: [
              {
                id: 28,
                question: "How can I move my team to New Manager?",
                answer:
                  "Menu -> Manage My Team -> General-> Select Employee -> Action (\u2026) -> Job Change -> Change Worker Details -> Move to new Manager,",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 22,
            categoryName: "Other Mutliple Changes",
            parentCategory: 4,
            categoryDescription:
              "Manager to initiate Other Mutliple Changes (Job Profile, Location, Time type, Compensation, Allowance, Bonus, Cost center) for Team",
            icon: null,
            questionsAndAnswers: [
              {
                id: 33,
                question: "How can I inItitae change for Contingent worker",
                answer:
                  "Menu -> Manage My Team -> General -> Employee Action (\u2026) -> Job Change -> Change Worker Details -> Other Multiple Change",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 23,
            categoryName: "Post Job Requisition",
            parentCategory: 4,
            categoryDescription: "Manager to Post Job Requisition",
            icon: null,
            questionsAndAnswers: [
              {
                id: 35,
                question: "How can I post Job Requisition",
                answer:
                  "Menu -> Manage My Team -> General -> Recruting & Contractors -> Edit Postion Restrictions",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 24,
            categoryName: "Promotion",
            parentCategory: 4,
            categoryDescription: "Manager to promote employee in team",
            icon: null,
            questionsAndAnswers: [
              {
                id: 31,
                question: "How can I initiate promotion for my team",
                answer:
                  "Menu -> Manage My Team -> General -> Employee Action (\u2026) -> Job Change -> Change Worker Details -> Promotion",
                yesCount: 0,
                noCount: 0,
                link: "India_HCM_WD_Change_Contact_Information.pdf",
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 25,
            categoryName: "Reports",
            parentCategory: 4,
            categoryDescription: "Manager to access the Reports",
            icon: null,
            questionsAndAnswers: [
              {
                id: 44,
                question: "How can I access Workday Reports",
                answer: "Menu>Manage My Team> Reports I can run",
                yesCount: 0,
                noCount: 0,
                link: null,
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 26,
            categoryName: "Spot Bonus",
            parentCategory: 4,
            categoryDescription: "Manager to Spot Bonus",
            icon: null,
            questionsAndAnswers: [
              {
                id: 42,
                question: "How can I assign Spot Bonus",
                answer:
                  "Menu -> Manage My Team -> General ->Select Employee -> Employee Action (\u2026)-> Compensation -> Request One-Time Payment -> Spot Bonus",
                yesCount: 0,
                noCount: 0,
                link: null,
              },
            ],
            subcategories: [],
          },
          {
            categoryId: 27,
            categoryName: "View Job Requisition",
            parentCategory: 4,
            categoryDescription: "Manager to View Job Requisition",
            icon: null,
            questionsAndAnswers: [
              {
                id: 40,
                question: "How can I view Job Requisition",
                answer:
                  "Menu -> Manage My Team -> General -> Recruting & Contractors -> View Job Requisition",
                yesCount: 0,
                noCount: 0,
                link: null,
              },
            ],
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    categoryId: 2,
    categoryName: "Onboarding",
    parentCategory: 0,
    categoryDescription: "Onboarding Process",
    icon: "People",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 28,
        categoryName: "Background Verification",
        parentCategory: 2,
        categoryDescription: "Background Verification",
        icon: null,
        questionsAndAnswers: [
          {
            id: 76,
            question:
              "I have received my previous employer final settlement documents. To whom I can share to complete my verification ?",
            answer:
              "New joiners are required to submit the settelment document to MassMutual India HR team within 15 days of start date. The soft copy of documents should be sent to mmgbsiindia@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 29,
        categoryName: "Bank Account details",
        parentCategory: 2,
        categoryDescription: "Updation of Bank account details",
        icon: null,
        questionsAndAnswers: [
          {
            id: 45,
            question: "Where should I upate the bank account details?",
            answer:
              "Bank account details should be updated in Workday.\n Workday Profile -> Actions -> Personal Data -> Maintain My Payment Election",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 46,
            question: "How can I update the bank account details on Workday?",
            answer:
              "Workday Profile -> Actions -> Personal Data -> Maintain My Payment Election.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 30,
        categoryName: "Bank Accounts",
        parentCategory: 2,
        categoryDescription: "Bank Account details",
        icon: null,
        questionsAndAnswers: [
          {
            id: 56,
            question: "Is it mandatory to open a new bank account for salary?",
            answer:
              "MassMutual India is associated with three banks HDFC, ICICI and AXIS bank. New joiners with existing account with these banks are advised to change salary account to MassMutual by reaching Bank reprsentatives. MassMutual India allows employees to update their any other bank accounts also for salary processing.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 57,
            question:
              "I want to open a new bank account or change salary account , what is the process?",
            answer:
              "Please reach out to our associated bank representatives\n  \u2022HDFC Bank- Venkateshwarlu Perala Venkateshwarlu.Perala@hdfcbank.com Ph.9396989578\n \u2022Axis Bank - Ms. Pallavi pallavi13@axisbank.com Ph: 9899602420\n \u2022ICICI Bank - Mr. Vishal vishal.kumar35@icicibank.com Ph: 7989307975",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 31,
        categoryName: "Contractor conversion to FTE",
        parentCategory: 2,
        categoryDescription: "Contractor to FTE conversion Process",
        icon: null,
        questionsAndAnswers: [
          {
            id: 79,
            question:
              "What is the onboarding process to convert contractor to FTE",
            answer:
              "Manager to submit the IT Onboarding request with reason as Prefix change to convert Contractor to FTE.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 32,
        categoryName: "Contractor Onboarding",
        parentCategory: 2,
        categoryDescription: "Contractor Onboarding Process",
        icon: null,
        questionsAndAnswers: [
          {
            id: 78,
            question:
              "What is the process to hire Contingent Worker on Workday?",
            answer:
              "Manager to submit contingent worker request in Workday. Workday -> Manage My team",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 33,
        categoryName: "Employee Benefits",
        parentCategory: 2,
        categoryDescription: "View employee benefits docs",
        icon: null,
        questionsAndAnswers: [
          {
            id: 51,
            question: "Where can I learn about the employee benefits ?",
            answer: "Please access MX India Page -> Human Resources",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 34,
        categoryName: "Employee Handbook",
        parentCategory: 2,
        categoryDescription: "Policies & Benefits document",
        icon: null,
        questionsAndAnswers: [
          {
            id: 53,
            question: "Where can I find the Employee Handbook?",
            answer:
              "Employee Handbook is available in MX Page under HR Resources. MX India Page -> Human Resources-> Onboarding",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 35,
        categoryName: "Insurance",
        parentCategory: 2,
        categoryDescription: "Insurance Benefits",
        icon: null,
        questionsAndAnswers: [
          {
            id: 61,
            question:
              "When can I expect the enrollment email for Medical Insurance?",
            answer:
              "FHPL Team will sending Medical Insurance enrollment email will to new hires between 15 to 20 working days from your date of joining",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 62,
            question: "Who is our Medical Insurance TPA ?",
            answer: "FHPL is our Medical Insurance TPA",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 63,
            question: "Who is the POC for queries on Medical Insurance?",
            answer: "FHPL POC : Nitin Madhukar Gulade ; Ph: 9960111950",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 64,
            question: "Who is our Medical Insurance Provider?",
            answer: "Aditya Birla Group is our Medical Insurance Provider",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 65,
            question: "Where can I check for my buddy details?",
            answer:
              "Buddy details will be shared to you over an email, on your joining date",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 66,
            question: "Where can I download the insurance cards",
            answer: "Please access FHPL Portal to download the e-cards",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 36,
        categoryName: "Onboarding",
        parentCategory: 2,
        categoryDescription: "Onboarding process",
        icon: "PersonRemove",
        questionsAndAnswers: [
          {
            id: 68,
            question:
              "My joining date in the offer letter is not the same as on the Agreement , is it possible to get it revised?",
            answer:
              "Please contact your Talent Acquistion partner for the offer letter with the revised date",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 69,
            question:
              "How will I know the MMID for a new team member joining my team?",
            answer:
              "New Hire MMID details will be shared with the manager on the email by the HRIS team",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 70,
            question:
              "Am I required to raise a subsidiary request for the New Hire ?",
            answer: "No. Subsidiary request is taken care",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 71,
            question:
              "What is the process for asset assignment to the new hire?",
            answer:
              "Employees' manager is required to submit the IT Onboarding request so that IT team assign the assets to the user",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 72,
            question: "Is it mandatory to nominate a buddy for the new hire?",
            answer:
              "Yes, as buddy is the person who can help in better intregation in the system you are recommended to nominate a buddy for new hire",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 73,
            question: "With whom should I share the Buddy details?",
            answer:
              "Buddy details has to be shared to the Talent Development team , the POC's are\n \n Rita Daniel : rdaniel32@massmutual.com\n Tarandeep Kaur : tdkaur91@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 74,
            question: "How will I know if my team member is onboarded?",
            answer:
              "You will receive an onboarding confrimation email from the HROps, alternatively you may reach out to the following POC's for confirmation:\n \n Vijayalaxmi Beamani : Vbeamani11@massmutual.com\n Vijay Kumar Dindi : vdindi43@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 77,
            question:
              "Would like to provide access to new hire? Where can I submit request?",
            answer:
              "Manager's need to submit IT onboarding request in Service now for desired access to new hire",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 80,
            question:
              "I missed to collect my new joiner welcome kit on my onboarding day. Whom should I reach to collect the Welcome Kit?",
            answer:
              "Employees's should send email to mmgbsiindia@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 82,
            question:
              "I have an issue in accessing an application, how can I reach IT support?",
            answer:
              "Please contact IT customer support 000-800-050-2039\n (Extn-44357). Provide your 4 digit PIN Id as last four digits of your aadhaar number.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 37,
        categoryName: "Personal Information update",
        parentCategory: 2,
        categoryDescription: "Updation of Personal Information update",
        icon: null,
        questionsAndAnswers: [
          {
            id: 47,
            question: "How to update Personal Information ?",
            answer: "Workday Profile ->Actions -> Personal Data",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 48,
            question: "How to update Emergency Contacts ?",
            answer:
              "Workdy Profile-> Actions->Personal Data-> Change emergency contact",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 49,
            question: "How to update the Address & Contact Number ?",
            answer:
              "Workday Profile -> Actions -> Personal Data -> Change Contact Information",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 50,
            question: "How to update the Legal & Preferred Name ?",
            answer:
              "Workday Profile -> Actions -> Personal Data -> Change My Legal Name (Supporting document required)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 60,
            question:
              "Where can I find the new hire badges to post it on Linkedin?",
            answer:
              "Please access MX India Page -> Human Resources-> Onboarding",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 38,
        categoryName: "Probation",
        parentCategory: 2,
        categoryDescription: "Probation Period details",
        icon: null,
        questionsAndAnswers: [
          {
            id: 67,
            question: "What is the duration of Probation at MassMutual India?",
            answer: "Probation period is for 6 months from the date of joining",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 75,
            question:
              "Am in entitled for all benefits during Probation period?",
            answer:
              "Yes, MassMutual India provides all benefits to new hires from their start date.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 81,
            question:
              "I worked as a contingent worker/Intern for 6 months and was converted to FTE, how long will be my probation period?",
            answer:
              "All new hires should be in probation period of 6 month from start date of FTE, irrespective of prior work experience in MassMutual India.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 39,
        categoryName: "Provident Fund",
        parentCategory: 2,
        categoryDescription: "Provident Fund Details",
        icon: null,
        questionsAndAnswers: [
          {
            id: 54,
            question:
              "When can I initiate PF transfer from my previous employer?",
            answer:
              "PF transfer request is suggested to initiate in EPFO portal with in 3 months of completion of your final settlement from your previous Organization.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 55,
            question: "What is the process to initiate the PF transfer ?",
            answer: "Please refer to the attached process document",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 58,
            question: "What is the timeline to opt for minimum PF ?",
            answer:
              "Minimum PF request should be opted within 2 days from start date. New joiners need to submit the letter to HR team or send pen signed lettter copy to mmgbsipayroll@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 59,
            question: "What is the procedure to opt for minimum PF ?",
            answer:
              "You will have to send a Minimum PF declaration letter to the mmgbsipayroll@massmutual.com to Opt for minimum PF within 2 days of your joining. Employee can access the declaration letter in MX India -> Human Resources-> Onboaridng",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 40,
        categoryName: "Salary",
        parentCategory: 2,
        categoryDescription: "Salary related Information",
        icon: null,
        questionsAndAnswers: [
          {
            id: 52,
            question: "When will I receive my first salary ?",
            answer:
              "New joiners who started before 20th of the month salaries will be processed in same month, else the first payroll will be processed in immediate next month along with the arrears.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 41,
        categoryName: "Transportation",
        parentCategory: 2,
        categoryDescription: "Transportation",
        icon: null,
        questionsAndAnswers: [
          {
            id: 83,
            question:
              "I want to avail company transport, whom should I reach to avail transport service?",
            answer:
              "Please reach MassMutual India transport team transport@massmutual.com to avail transport facility",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 42,
    categoryName: "Offboarding",
    parentCategory: 0,
    categoryDescription: "Offboarding Process",
    icon: "PersonRemove",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 43,
        categoryName: "Resignation",
        parentCategory: 42,
        categoryDescription: "Resignation",
        icon: null,
        questionsAndAnswers: [
          {
            id: 84,
            question: "What is the process to initiate resignation ?",
            answer:
              "Resignation request can be raised by employee on Workday, following this path.\n View Profile-> Actions-> Job Change -> Resign.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 92,
            question: "The last working day is decided based on?",
            answer:
              "For employees on probation: Resignation date + 29 calendar days\n For confirmed employees: Resignation date + 59 calendar days",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 93,
            question:
              "My LWD is falling on a weekend/ a holiday will there be any change in the LWD?",
            answer:
              "If LWD is on weekends/holidays, LWD will be considered as a day prior to the last working day, as per the policy.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 94,
            question:
              "Will my paid time off's be adjusted against the notice short fall?",
            answer:
              "Paid time off balances will not be adjusted against shortfall in the notice period.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 96,
            question: "Will my salary be on hold during notice period?",
            answer:
              "If your LWD falls on or before the 15th of the following month, then your current month's salary will be kept on hold and the same will be paid to you in your full and final settlement along with the number of days served in the next month. \n \n If your last working date falls after the 15th of the following month, then your salary for that period\n will be kept on hold and the same will be paid to you in your full and final settlement. \n \n If any employee who has resigned, has any outstanding dues, their salary will kept on hold irrespective of cutoff dates.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 103,
            question:
              "Who is the point of contact for any queries once you have left the organization ?",
            answer:
              "Ex-employees are requested to send their queries to mmgbsiseparations@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 110,
            question:
              "Do we have access to download Payslips once we have left the organization?",
            answer:
              "Employees do not have access to download payslips or letters post their exit from the organization. We recommend employee's to download their payslips, Form 16 or any other company issued letter prior to their exit date. However, ex-employees may reach mmgbsiseparations@massmutual.com for any assistance. Post completion of Full and Final settlement, our separations team will send the settlemetnt sheet, where ex-employees can see last month payment on hold details, if any, along with other settlement details.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 113,
            question:
              "When can I approve the resignation request of my reportee?",
            answer:
              "Resignation request must be approved within 15 days from the submission of date of resignation by team member.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 114,
            question:
              "The last working day is falling on a weekend/holiday. Can I approve the request of my reportee, considering the same as the last day of work?",
            answer:
              "Please approve the request by advancing the LWD of the employee to a working day.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 117,
            question:
              "Do I have to submit my time entry on my last day of work?",
            answer:
              "Yes, time entry needs to be submitted for all days till the last day of work.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 118,
            question:
              "Do I have to submit the allowances on my last day of work?",
            answer:
              "Yes, If you are eligible for allowances, then you need to submit allowances for all days till the last day of work and request your manager to approve the time entry.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 120,
            question:
              "I have applied future dated leaves and was approved, are those leaves consider for leave encashment in Full and Final settlement?",
            answer:
              "Please initiate cancellation of future dated leaves, ensure your manager approves the cancellation to add it to your Full and Final settlement balance.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 44,
        categoryName: "Full & Final Settlement",
        parentCategory: 42,
        categoryDescription: "Full & Final Settlement",
        icon: null,
        questionsAndAnswers: [
          {
            id: 98,
            question: "When will I receive the Full and Final settlement ?",
            answer:
              "Employees getting relieved on or before 20th of the month, will need to get clearances from all departments. The full and final settlement for them will be processed in the same month payroll.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 99,
            question: "When can I expect the relieving letter?",
            answer:
              "Relieving letter will be issued on reciept of 'all due clearances' report from all departments.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 100,
            question: "What is my Paid Time Off Entitlement?",
            answer:
              "You can calculate your PTO entitlement (Beginning Year Balance+Accrued Year To Date)- Absence Paid Year To Date. Please send query to mmgbsiseparations@massmutual.com to know the Paid Time Off Entitlement",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 101,
            question: "Is my unutilized sick leave encashed?",
            answer: "Sick leaves can not be encashed.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 102,
            question: "What if settlement is negative ?",
            answer:
              "If your settlement amount is negative, you will receive an email with the recovery details, post the completion of the settlement process. Once all dues are cleared, experience certificate will be issued.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 111,
            question: "Whom to contact for previous employment Verification ?",
            answer:
              "Previous employment verifications wil be addressed by mmgbsiseparations@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 112,
            question: "How & when will I receive my Form-16 ?",
            answer:
              "You can download the Form -16 for the previous year accesing ceredian ESS, for the current year Form-16 it will be sent to your personal email in the month of July.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 115,
            question:
              "I have opted for topup during insurance enrollment. Will I receive the refund of the premium amount?",
            answer:
              "The refund will be processed post completion of the settlement process.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 116,
            question:
              "How is the refund calculated for the premiun paid towards insurance topup?",
            answer: "The refund is calculated on prorata basis.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 119,
            question: "where can I download the Payslip/ taxslip/ Form 16?",
            answer:
              "Payslips/ Taxslip and Form 16's can be downloaded from Ceredian ESS",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 45,
        categoryName: "No Due Clearance",
        parentCategory: 42,
        categoryDescription: "No Due Clearance",
        icon: null,
        questionsAndAnswers: [
          {
            id: 89,
            question: "What assets need to be submitted on my LWD?",
            answer:
              "All the devices issued by the organization should be submitted, Please refer the Exit guidelines document available on Mx India portal> Human Resources>Offboarding, for more dteails.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 90,
            question: "Will I have a deduction on non-submission of assets?",
            answer:
              "In case of non-submission of assets, the amount will be recovered in Full and Final settlement bsed on the recovery details submitted to HR departments.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 97,
            question:
              "Where can I get the company bank acocunt details for payment of Notice Pay?",
            answer:
              "Please send an email to mmgbsipayroll@massmutual.com/mmgbsiseparations@massmutual.com for company Bank account details",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 104,
            question:
              "I am out of office location how can I submit my assets ?",
            answer:
              "If you are working from out of Hyderabad, we can arrange for asset pick up from your home location on your last working day. Please contact mmgbsiseparations@massmutual.com with your current address details, requesting for pickup.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 105,
            question: "When will I receive my relieving letter ?",
            answer:
              "You will be receiving the relieving letter upon clearance from all the stakeholders.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 106,
            question: "Do I need to be in office on my LWD?",
            answer:
              "It is recommended to be in the office on your LWD. However, if you are working from out of Hyderabad you may request for asset pickup on your last day of work.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 107,
            question: "When can I submit my assets ?",
            answer:
              "Please submit the company issued assets to the respective departments before 5:00 PM on your last working day.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 108,
            question:
              "I am working in the night shift when shoudl I submit my assets?",
            answer:
              "If you are working in night shift, you can submit the assets an hour ahead to your logout time.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 109,
            question: "Whom should I contact for assets submission?",
            answer:
              "Security/ Business Operations:\n \n S. No Clearance Details\n 1. Employee ID Card/Access Card\n 2. Drawers cleared and keys returned\n 3. Balance Visiting Cards\n 4. Vehicle Pass/ Parking Sticker\n \n IT Support:\n S. No Clearance Details\n 1. Laptop\n 2. Laptop Bag\n 3. Desktop (If applicable)\n 4. Desk Phone/Headset\n 5. Mouse\n 6. Mobile Device (if applicable)\n 7. Data Card (if applicable)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 46,
        categoryName: "Notice Period",
        parentCategory: 42,
        categoryDescription: "Notice Period",
        icon: null,
        questionsAndAnswers: [
          {
            id: 85,
            question: "What is the notice period policy in MassMutual India?",
            answer:
              "For employees on probation, notice period is 30 days. For confirmed employees, notice period is 60 days.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 86,
            question: "Can I get an early release/ relieving?",
            answer:
              "Employee needs to request for early release with his/her manager/HRBP with valid justification. It is the discretion of business to provide approval for early release.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 87,
            question: "What is the process for notice period buyout ?",
            answer:
              "Post approval from business for early release, HR team will notify resigned employee with notice period shortfall recovery amount. Employees also can send their query to mmgbsiseparations.com to know the recovery amount.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 88,
            question: "How is the notice period buyout calculated?",
            answer:
              "Notice buyout is calculated on your fixed salary/30 * no. of notice period shortfall.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 91,
            question:
              "To which bank account I need to transfer Notice Periold short fall amount?",
            answer:
              "Notice period shortfall amount to be transferred to the MassMutual Bank account, Notice period shortfall amount details along with bank account will by HR team to resigned employees mmgbsiseparations@massmutual.com.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 95,
            question: "What is the calulation for notice shortfall recovery?",
            answer:
              "Notice period shortfall calculation: \n (No of days notice periold shortfall* Fixed Compensation)/30",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 47,
        categoryName: "Intern",
        parentCategory: 42,
        categoryDescription: "Intern Separation Process",
        icon: null,
        questionsAndAnswers: [
          {
            id: 121,
            question: "When will I get internship certificate?",
            answer:
              "Internship certificate will be issued on completion of Full & Final settlement process",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 122,
            question: "Do interns need to service notice period?",
            answer: "Yes, interns need to serve one month of notice period.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 123,
            question:
              "Are Interns are entitled for Leave encashment in Final Settlement?",
            answer: "No, Leave encashment is not applicable for Interns.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 48,
        categoryName: "Contingent Worker",
        parentCategory: 42,
        categoryDescription: "Contingent Worker Separations Process",
        icon: null,
        questionsAndAnswers: [
          {
            id: 124,
            question: "What is the Contingent Worker Termination Process?",
            answer:
              "Manager to terminate contigent worker profile in Workday as per the contract end date. Contingent Worker to submit all company issued assets & ID cards to respective departments on their Last Working Date. Any non submission of assets, the dues will be notified to Vendor Partner for recovery. No Letters will be issued by MassMutual India on contigent worker separation.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 49,
    categoryName: "Time Tracking",
    parentCategory: 0,
    categoryDescription: "Time Entry Process",
    icon: "ManageHistory",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 50,
        categoryName: "Time Entry Process",
        parentCategory: 49,
        categoryDescription: "Time Entry Process",
        icon: null,
        questionsAndAnswers: [
          {
            id: 125,
            question: "Where to entry my Weekly Timesheet?",
            answer: "Login to workday HCM> Menu> Time>Enter time",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 126,
            question:
              "While marking attendance what categories needs to consideration?",
            answer:
              "Time type should be chosen as 'Hours worked' . Hours should be 8 per day/shouldn't exceed 40 hrs per week, Shift should be updated as per the employee work timings.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 127,
            question: "What are the timelines to submit or correct Time Entry?",
            answer:
              "All MassMutual India employee to submit Time Entry on every Friday mandatorily. Ensure to enter time and submit tasks to complete the time entry submission. Managers are required to approve time entry on Firday or on the immediate next working day.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 128,
            question: "What is the maximum hours I can submit time per week?",
            answer:
              "Number of Hours should be 8 per day or as per your work schedule, should not exceed overall 40 per week. Over Time Hours on any day has to be updated in Overtime field.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 131,
            question:
              "I have availed time off in this week, how to submit time entry?",
            answer:
              "For all Time off , other leave category except Mandatory Holiday, choose Time type as hours worked and update hours as 8 and shift should be updated as Holiday/leave.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 132,
            question: "How to update time sheet for Mandatory holidays?",
            answer:
              'On Mandatory holidays choose Time type category as "Holiday" as hours worked as 8',
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 133,
            question: "How to update time entry working under week off's?",
            answer:
              "Employees working on week-off should follow below additional steps \n 1.Leave the Project Code (T Code) as blank\n 2. Submit new record by choosing Time Type as Compensatory Off to avail Compensatory Time Off balance",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 134,
            question: "How to update time entry working under Maternity leave?",
            answer:
              "Login to workday HCM> Menu> Time>Enter time>Chose time type as Holiday>update T-code( Maternity leave ) under projects>update shift as Holiday/leave for the ML period",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 135,
            question:
              "How to update future dated time entries on workday (Paternity Leaves/Maternity Leave/ Loss Of Pay)",
            answer:
              "Select Time type as Holiday\n Number of Hours should be 8 per day or as per your work schedule, should not exceed overall hours 40 per week.\n Project code (T Code) is mandatory for employee working projects (Check with your respective manager for your correct T Code), and employees working in Enablement function Insurance operations, Digital Operations, PRT, MMLIS Operations, Haven Tech, Barings, may ignore project code",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 136,
            question:
              "My exit date is in the mid or end of the month. Do I need to update shift & time sheet?",
            answer:
              "It is mandatory to fill the time sheet and entitled allowances like shift, On-call & OT to get them processed as a part of Full and Final Settlement",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 137,
            question:
              "T-codes are mandatory for employees working in projects?",
            answer:
              "Yes, Project code (T Code) is mandatory for employee working projects (Check with your respective manager for your correct T Code), and employees working in Enablement function Insurance operations, Digital Operations, PRT, MMLIS Operations, Haven Tech, Barings, may ignore project code.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 51,
        categoryName: "Time Entry Correction",
        parentCategory: 49,
        categoryDescription: "Time Entry Correction",
        icon: null,
        questionsAndAnswers: [
          {
            id: 129,
            question:
              "Can I edit my time entry which was already approved by manager?",
            answer:
              "Yes - please select time entry date and correct the values -> Review -> Submit",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 130,
            question: "How do I delete time entry to make any corrections?",
            answer:
              "Select particular date >Click on hours worked >Delete ,if it is multiple use clear option from the actions drop down",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 52,
        categoryName: "Shift Allowances",
        parentCategory: 49,
        categoryDescription: "Shift Allowances",
        icon: null,
        questionsAndAnswers: [
          {
            id: 138,
            question: "How to update Shift category?",
            answer:
              "Login to workday HCM> Menu> Time>Enter time>Chose time type as hours worked > drop down shift and choose shift category as per shift entitlement",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 139,
            question:
              "Is manager's approval mandatory to process allowances in payroll ?",
            answer:
              "Only approved Time entries are considered for payroll processing.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 140,
            question: "Is an intern eligible for shift allowances?",
            answer:
              "Yes- if Intern is working in shifts as per business requirement.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 141,
            question: "Where can in find the shift allowance policy?",
            answer:
              "Okta>CFM Page > Company policies>Policy on Shift, On-Call & Overtime Allowances",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 142,
            question:
              "I have updated all the shift allowances that has been approved too, but has not been processed in the payroll.",
            answer:
              "Shift Allowance for current month will be processed in immediate next month payroll. Please check following by end of month to ensure your allowances are processed in payroll. \n . Ensure your time entries are sucesfully submitted\n . All Time entries should be approved by 10th of every month\n . New joiners - should complete all onbording mandatory tasks on Workday",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 143,
            question: "Who are eligible for Shift allowances?",
            answer:
              "Shift allowances are applicable to all employees of MMGBSI, who are designated between Analyst to Lead/ Architect and are required to work in a shift other than the regular work hours, as per the employment contract and manager authorization",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 144,
            question:
              "I missed to mark Shift/On-call/Overtime in last month time entry. Am I allowed to resubmit the time entry?\n Will arrears in the allowance be processed?",
            answer:
              "Arrears on any missed allowance inputs will be processed up to 2 months only subjected to time sheet approval before 10th of every month.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 53,
        categoryName: "On-Call Allowance",
        parentCategory: 49,
        categoryDescription: "On-Call Allowance",
        icon: null,
        questionsAndAnswers: [
          {
            id: 145,
            question: "Can I enter both On call & Over time for same day?",
            answer:
              "No , both can not be claimed at same day, employees who are on On-Call support beyond working hours are eligible for On-call allowances, where\n Overtime is not applicable",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 146,
            question: "When an employee is entitled to get on call allowances?",
            answer:
              "On-Call allowance is paid to those who have provided on-call support of 4 hours beyond work hours on weekdays / weekends / holidays, with manager's authorization",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 147,
            question: "How can I update on call allowances on workday?",
            answer:
              "Login to workday HCM> Menu> Time>Enter time>Drop down on call filed>Choose on-call as Yes",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 148,
            question:
              "What is the minimum duration to be eligible for on call?",
            answer:
              "Minimum duration to be eligible for On-Call allowance on any day is 04 hours",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 149,
            question: "When will be on-call allowance processed and paid?",
            answer:
              "With manager's approval, On call allowance of previous month will be processed in subsequent month payroll.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 150,
            question:
              "How to update time entry on week off for on call l support in workday ?",
            answer:
              "Select Time type as Holiday irrespective of Time Off/Flexi Holiday and Holiday only on Mandated Holidays \n Number of Hours should be 4 per day \n Leave the Project Code (T Code) as blank \n Select On-call Allowance : choose Yes",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 54,
        categoryName: "Over Time",
        parentCategory: 49,
        categoryDescription: "Over Time",
        icon: null,
        questionsAndAnswers: [
          {
            id: 151,
            question: "When an employee is entitled to get Overtime allowance?",
            answer:
              "Overtime worked will be defined as the time spent working in excess of 9 hours on any given workday, and time spent more than 45 hours in a given work week.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 152,
            question:
              "What are the maximum number of hours employee can work overtime?",
            answer:
              "The total numbers of hours worked for any employee inclusive of overtime, shouldnot exceed 12 hours in a day and 60 hours in a week",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 153,
            question: "How is Overtime allowance calculated?",
            answer:
              "Payment for hours of overtime worked is calculated twice the regular hourly rate of normal wages, based on fixed compensation.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 55,
    categoryName: "Payroll",
    parentCategory: 0,
    categoryDescription: "Payroll Process",
    icon: "AssuredWorkload",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 56,
        categoryName: "Bank Account",
        parentCategory: 55,
        categoryDescription: "Bank Account",
        icon: null,
        questionsAndAnswers: [
          {
            id: 185,
            question: "How to update the salary account details on HCM?",
            answer:
              "Workday>Profile> Actions > Personal data> Maintain my payment elections",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 186,
            question:
              "What is the timeline to update bank details on Workday HCM where the should reflect in same month payroll",
            answer:
              "The timeline to update bank details on Workday HCM is on or before 20th of the month for data changes or bank account updates will be considered and reflect in the same month payroll",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 187,
            question:
              "How to open/convert bank account with associated banks of MassMutual?",
            answer:
              "Below are the point of contact details of banks associated with MassMutual:\n \u2022 HDFC Bank- Venkateswarlu Perala (Venkateshwarlu.Perala@hdfcbank.com) Ph.9396989578\n \u2022 Axis Bank - Mr. Naresh (Kalyanam.kumar@axisbank.com) Ph: 96664 35427\n \u2022 ICICI Bank - Mr. Muralidhar (muralidhar.m@icicibank.com)Ph: 91601 25475\n Employees may reach out to the respective bank POCs to open/convert their existing accounts.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 188,
            question: "Can Bank details be changed anytime?",
            answer:
              "Yes, bank details can be changed anytime from your end on workday HCM on or before 20th of month",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 57,
        categoryName: "Ceridain(Dayforce) access",
        parentCategory: 55,
        categoryDescription: "Ceridain(Dayforce) access",
        icon: null,
        questionsAndAnswers: [
          {
            id: 154,
            question: "What is Payroll portal Ceridian(Dayforce) URL ?",
            answer: "https://hcm.excelityglobal.com/ESS/",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 155,
            question: "When will New hires get Ceridian Dayforce access?",
            answer:
              "New joiners will get access to Ceridian Dayforce access within a week of their start date. Payroll team notifies the access enablement and actions required by new hire in payroll portal. New hires starts after 15th of the month will get access to payroll portal in first week of next month.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 156,
            question:
              "How do we know the Ceridian Dayforce access has been enabled?",
            answer:
              "An email will be sent from the Dayforce team with the link and credentials.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 157,
            question:
              "I am unable to login to ESS portal / having a query whom should I contact ?",
            answer:
              "Please contact Ceridian (Dayforce) team info@dayforce.com with your details ( MMID and Name)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 158,
            question: "How to reset Dayforce portal password?",
            answer:
              "Access Ceridian Dayforce portal , click on forget password. Provide User name as MMI followed by your employee ID ( Example if your employee id MM01920 then the user name is MMIMM01920), followed by Employee ID ,Date of Joining and Date of Birth to reset password",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 58,
        categoryName: "Child care",
        parentCategory: 55,
        categoryDescription: "Child care",
        icon: null,
        questionsAndAnswers: [
          {
            id: 196,
            question: "What expenses are reimbursed in the payroll?",
            answer:
              "Childcare Reimbursement is the only expense reimbursed in payroll.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 198,
            question: "Where can I find the child care reimbursement form?",
            answer:
              "Mx India Page-https://massmutual.sharepoint.com> Human resources>Payroll>Reimbursement claim form",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 199,
            question: "Where can I find the child care reimbursement policy ?",
            answer:
              "Okta>CFM Page > Company policies> Child care reimbursement policy",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 200,
            question: "What is the process to apply child care reimbursement ?",
            answer:
              "You need to send an email to mmgbsipayroll@massmututal.com on every month with the reimbursement form and school receipt and if you are applying for first time Child birth certificate and photograph is mandatory as one time submission.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 201,
            question:
              "What should be the age limit of the child to avail child care reimbursement ?",
            answer: "Child age should be less than six (6) years.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 202,
            question:
              "How to submit child care reimbursement, if employee is on Maternity leave?",
            answer:
              "Please send an email to mmgbsipayroll@massmututal.com with complete details and your need to be on ML. Payroll team will take care of reimbursement.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 59,
        categoryName: "Flexi Pay Planner",
        parentCategory: 55,
        categoryDescription: "Flexi Pay Planner",
        icon: null,
        questionsAndAnswers: [
          {
            id: 171,
            question: "What is flexi pay planner?",
            answer:
              "It is a benefit given to employees to choose the pay elements as per the utility, benefit to the employees only for employees under old regime and it carries an additional tax exemption apart for regular tax.(applicable only to employees who fulfills the tax conditions). LTA, Child Education, Hostel Allowance, Meal Allowance and NPS are enabled in Flexi Pay planner. Only NPS is exempted under New Tax Regime.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 172,
            question: "How to opt for a flexi-planner?",
            answer:
              "Login to Dayforce ESS >Home Page> Drop down Menu> My Transactions>Flexible pay planner, choose the options you want to opt for. Please refer to the process note available in Mx India page.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 173,
            question:
              "When can I update Flexi pay planner and what are its timelines?",
            answer:
              "Flexi pay planner can be updated either at the time of joining or at the beginning of the every financial year. Employee can opt for it at the beginning of the financial year. No changes are allowed in the mid of the FY.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 174,
            question: "Is it mandatory to update Flexi Planner ?",
            answer:
              "No it is optional , new tax regime employees may opt for NPS for tax exemption where as Old tax regime employee may opt all components in flexi play planner.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 175,
            question:
              "What is the advantage of choosing Flexi pay planner for whom it is applicable?",
            answer:
              "Employees falling under old tax regime may get some additional tax benefit if they chose Flexi pay planner. Employees must submit the required proofs during year end.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 176,
            question: "How can I opt for Meal Allowance - Sodexo card(Pluxee)?",
            answer:
              "Employee should opt for Meal allowances in the Flexible pay planner. Post completion of payroll execise every month, employee will get an email with credentials and link for Pluxee online access and also physical card will be delivered to office within 15 days of payroll processing.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 177,
            question: "Where can I collect Sodexo(Pluxee) card?",
            answer:
              "Once cards are received by HR team , employee will get an email to collect card in person.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 60,
        categoryName: "Internet reimbursemnt",
        parentCategory: 55,
        categoryDescription: "Internet reimbursemnt",
        icon: null,
        questionsAndAnswers: [
          {
            id: 204,
            question:
              "Is internet reimbursement a part of Payroll reimbursement ?",
            answer:
              "No it is not a part of payroll. Please submit reimbursement request on Concur portal. please contact finance team( mmgbsifinance@massmutual.com) for any queries.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 61,
        categoryName: "Investement Declarations",
        parentCategory: 55,
        categoryDescription: "Investement Declarations",
        icon: null,
        questionsAndAnswers: [
          {
            id: 159,
            question: "How to change the Tax regime in ESS portal ?",
            answer:
              "As per tax guidelines New regime is applicable as per new rules for all new hires. Change is accepted at the time of joining. To change the regime, Login to > https://hcm.excelityglobal.com/ESS/ >Select My Transactions > Investment declarations > Previous employer income >updated as Old regime/New reigme > check and update the regime in bottom of ESS page & Submit",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 160,
            question:
              "What is the cut off date to update Investment declarations?",
            answer:
              "Investment declarations window will be enabled for all employees between 1st to 15th of every month to change the investments.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 161,
            question: "When can I update Tax regime?",
            answer:
              "Tax regime can be updated or changed the time of joining or beginning of the every financial year , it is one time change and no changes are allowed in the mid of the FY",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 62,
        categoryName: "Investment Proof Submission",
        parentCategory: 55,
        categoryDescription: "Investment Proof Submission",
        icon: null,
        questionsAndAnswers: [
          {
            id: 206,
            question: "When should I submit the tax proofs? (IPSF Exercise)",
            answer:
              "IPSF activity starts from mid of December to January. Standard guidelines and orientations is given on submitting proofs in the portal within time lines.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 207,
            question: "What happens if investment proofs are not submitted?",
            answer:
              "The tax exemption provided for the entire year considered for the investment declarations will now be reversed, resulting in higher tax.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 208,
            question:
              "I have submitted all the proofs under IPSF, where can I see the status ?",
            answer:
              "Employee will get a Mock IT sheet during February to check all the proofs and if any thing missing, an email will be sent from Day Force payroll team to check the status on the submission",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 209,
            question:
              "Whom should I contact for investment declaration and investment proof submission queries?",
            answer:
              "Drop an email to info@ceridian.com with error screenshots and query in details",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 63,
        categoryName: "Joining bonus",
        parentCategory: 55,
        categoryDescription: "Joining bonus",
        icon: null,
        questionsAndAnswers: [
          {
            id: 197,
            question: "Where can I find payment details of my joining bonus?",
            answer:
              "If this is a part of your offer it will processed in payroll under 2 installments",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 64,
        categoryName: "Leave Encashment",
        parentCategory: 55,
        categoryDescription: "Leave Encashment",
        icon: null,
        questionsAndAnswers: [
          {
            id: 193,
            question: "Can I claim avail leave encashment?",
            answer:
              "Only Paid Time Off in excess of 60 days will be encashed (on basic salary). It is encashed only at the beginning of the following year, employees are not allowed to encash leaves later for rest of the tenure.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 194,
            question: "How leave encashment is calculated",
            answer:
              "It will be calculated based on latest basic salary of the employee. Per day basic salary * paid time entitlement days.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 65,
        categoryName: "Leave Travel Allowance",
        parentCategory: 55,
        categoryDescription: "Leave Travel Allowance",
        icon: null,
        questionsAndAnswers: [
          {
            id: 178,
            question: "How can I avail for a Leave travel allowance?",
            answer:
              "Employee need to choose it as part of Flexi pay planner then only LTA will be applicable. Tax exempted at the end of year on submission of bills as per IT rules.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 179,
            question:
              "What is the eligibility for availing LTA (Leave travel allowance)?",
            answer:
              "Employees must take 3 continuous days of paid time off. In a block of four years an employee can avail LTA for two travels with his family with in India only the travel fare is alone eligible for tax exemption, not the rest expenses incurred ( site seeing , hotel & food etc.) Current block is Jan-2022 to Dec-2025",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 66,
        categoryName: "Maternity Benefit",
        parentCategory: 55,
        categoryDescription: "Maternity Benefit",
        icon: null,
        questionsAndAnswers: [
          {
            id: 191,
            question:
              "When does the Maternity bonus will get processed who are eligible ?",
            answer:
              "Employees would be eligible for a Maternity Bonus of INR 3,500 (one-time payment) for each instance of childbirth. Employee have to send email to HR about theur pregnancy/ child birth for the bonus to be processed in the subsequent month payroll.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 192,
            question: "Can I request for advance for maternity?",
            answer:
              "Please refer to the policy on maternity benefits for further details, Okta > CFM>Company polices>Policy on the Maternity Benefits.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 67,
        categoryName: "National Pension Scheme",
        parentCategory: 55,
        categoryDescription: "National Pension Scheme",
        icon: null,
        questionsAndAnswers: [
          {
            id: 180,
            question: "What is the process to choose NPS and time lines?",
            answer:
              "NPS should be opted in the ESS portal during the time of joining or beginning of the financial year . Please refer MX India Page https://massmutual.sharepoint.com >Documents> HR Resources > Payroll > National pension scheme details for further details",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 181,
            question: "How to open NPS account ?",
            answer:
              "Please refer MX India Page https://massmutual.sharepoint.com >Documents> HR Resources > Payroll > National pension scheme details.It should be opened from the NPS protean for corporate contributions and share the PRAN number with Payroll team(mmgbsipayroll@massmutual.com)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 182,
            question:
              "I am having existing PRAN account how to tag to MassMutual Corporate account?",
            answer:
              "Please send an email to mmgbsipayroll@massmututal.com with your PRAN details. Payroll team will tag your PRAN to MassMutual corporate account.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 183,
            question:
              "What is the maximum and minimum amount I can contribute to NPS?",
            answer:
              "If you have opted for the New Tax regime the contribution can be in between 1%-14% and if it\u2019s the Old Tax regime, it could be from 1-10%.( Monthly contribution should not be less than 500)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 184,
            question:
              "How to shift NPS account from other subscriber to NPS protean?",
            answer:
              "For subscriber shifting process is to be initiated, please send an email to mmgbsipayroll@massmututal.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 68,
        categoryName: "Payroll Input",
        parentCategory: 55,
        categoryDescription: "Payroll Input",
        icon: null,
        questionsAndAnswers: [
          {
            id: 189,
            question:
              "What are the components to be considered in gross salary?",
            answer:
              "Basic Salary, HRA, Allowances and any variable income for the month (Shift allowance, On call Allowance, OT Allowance, Childcare reimbursement, Spot Bonus, Referral Bonus, Notice Period Buyout, Joining Bonus, etc.) are the gross salary components.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 190,
            question:
              "What data should be sent to payroll team to consider it under payroll?",
            answer:
              "The below data can be sent to payroll for consideration: send an email to mmgbsipayroll@massmututal.com \n \u2022 Min PF Request\n \u2022 Childcare reimbursement\n \u2022 Employee Master Changes (DOB, Name Corrections, etc.) (If not able to update in workday system due to valid reason)\n \u2022 PRAN Details\n . Employees working on Statutory Holiday\n . Loss of Pay details if not submitted/in progress in Workday\n . Hold salary",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 203,
            question:
              "If I am working on a statutory holiday, will I be entitled for double pay and how is it calculated?",
            answer:
              "Statutory Holidays in India are on 26th January, 1st May, 15th August & 2nd October. Employees working on these days, will receive twice the daily wages (calculated based on fixed compensation) as well as a compensatory off. Compensatory off needs to be utilized within 90 days as per leave policy.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 69,
        categoryName: "Payslips",
        parentCategory: 55,
        categoryDescription: "Payslips",
        icon: null,
        questionsAndAnswers: [
          {
            id: 167,
            question: "How to download pay slips from Dayforce?",
            answer:
              "Day force Login>Home Page> Drop down Menu> My pay Statements>Pay slips>download",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 168,
            question: "When are Monthly pay slips available in ESS portal ?",
            answer:
              "Every month pay slips can we be downloaded from the First working day of the subsequent moth .",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 170,
            question:
              "Where can I find and download my Monthly IT computation sheet?",
            answer:
              "Login to Dayforce ESS >Home Page> Drop down Menu> My pay Statements>IT Computation",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 70,
        categoryName: "Provident fund",
        parentCategory: 55,
        categoryDescription: "Provident fund",
        icon: null,
        questionsAndAnswers: [
          {
            id: 164,
            question:
              "Can we change our PF contribution to Min PF or Regular during the tenure at MassMutual India?",
            answer:
              "During the start of the Financial year changes are allowed (changes are subjected to PF dept conditions). Employee needs to submit the request letter to Payroll team (mmgbsipayroll@massmutual.com) for any changes later in the year.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 71,
        categoryName: "Relocation",
        parentCategory: 55,
        categoryDescription: "Relocation",
        icon: null,
        questionsAndAnswers: [
          {
            id: 205,
            question: "Is relocation reimbursement a part of Payroll?",
            answer:
              "No it is not a part of payroll. Please submit reimbursement request on Concur portal. please contact finance team( mmgbsifinance@massmutual.com)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 72,
        categoryName: "Salary Credit Date",
        parentCategory: 55,
        categoryDescription: "Salary Credit Date",
        icon: null,
        questionsAndAnswers: [
          {
            id: 195,
            question: "What is salary remittance date?",
            answer:
              "Salary will be credited to employees a day prior to the last working day of the month. For new hires who join before 20th of the month, payroll will be processed in the same month where as who join after 20th of the month, payroll will be processed immedite next month along with arrears.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 73,
        categoryName: "Tax",
        parentCategory: 55,
        categoryDescription: "Tax",
        icon: null,
        questionsAndAnswers: [
          {
            id: 162,
            question: "Does new tax regime have any tax exemptions?",
            answer:
              "Yes. It is limited to NPS and Interest on Home Loan on Lent-out Property u/ Section 24",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 163,
            question:
              "How is the tax calculated on salary and monthly deduction?",
            answer:
              "Tax is calculated for entire financial year either from 1st April or from the date of joining ( if employee joining in Mid of the FY ) till end of the financial year based on total taxable income post consideration of exemptions as per Investment declarations and Flexi Pay planner components. Total tax will be deducted equally in monthly payroll.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 166,
            question: "Where can I find the tax calculator ?",
            answer:
              "Click on -https://hcm.excelityglobal.com/ESS/taxCal.html or MX India Page https://massmutual.sharepoint.com >Documents> HR Resources . Calculator will only helps employees with approximate tax deduction.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 169,
            question: "Where can I find my detailed earnings and tax break up?",
            answer:
              "Login to Dayforce ESS >Home Page> Drop down Menu> My pay Statements>Earnings and tax breakup",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 74,
        categoryName: "Voluntary Provident Fund",
        parentCategory: 55,
        categoryDescription: "Voluntary Provident Fund",
        icon: null,
        questionsAndAnswers: [
          {
            id: 165,
            question:
              "When can I choose VPF, how to opt and what is the minimum and Maximum percentage",
            answer:
              "VPF can be opted from 1-88% of the employee basic , it has to be updated in ESS portal either at the time of joining or beginning of the Financial year, Navigation to Login Dayforce ESS >Home Page> Drop down Menu> My Transactions>VPF",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 75,
    categoryName: "HR Policies",
    parentCategory: 0,
    categoryDescription: "Employee Policies",
    icon: "Policy",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 76,
        categoryName: "Annual Incentive Bonus(AIB)",
        parentCategory: 75,
        categoryDescription: "Annual Incentive Bonus(AIB)",
        icon: null,
        questionsAndAnswers: [
          {
            id: 211,
            question: "What is the eligibility for AIB/ Variable Pay?",
            answer:
              "Eligibility criteria for AIB payout is employee's date of joining must be on or before 1 October and he/she have to be on payroll as on the AIB payout date (March 1st Week)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 212,
            question: "When is AIB payout done and what is the process?",
            answer:
              "AIB/Bonus payout is paid on first week of March, and is done on prorated basis for employees who have joined during the year.\n AIB amount is provided by the manager during annual compensation planning. It also depends on the individual's performance and company's performance throughout the year.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 77,
        categoryName: "Anti-Nepotism Policy",
        parentCategory: 75,
        categoryDescription: "Anti-Nepotism Policy",
        icon: null,
        questionsAndAnswers: [
          {
            id: 213,
            question:
              "What is Anti-Nepotism policy? How do I report that I have a relative in MMI or update any anti-nepotism information?",
            answer:
              "The Anti-Nepotism Policy provides information on your responsibilities for avoiding nepotism, or favoritism to members from the families or friends for securing a job. Update your profile page on Workday by going to Actions>Additional Data>Edit Effective Dated Custom Object> enter the effective date (note this can be the date of entry)>click OK>click Edit Additional Data>add or edit your family member and their relationship to you> Submit.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 78,
        categoryName: "Business Gifts & Entertainment Policy",
        parentCategory: 75,
        categoryDescription: "Business Gifts & Entertainment Policy",
        icon: null,
        questionsAndAnswers: [
          {
            id: 214,
            question:
              "Do we have any policy on business gifts & entertainment?",
            answer:
              "Yes, MassMutual India employee shouldn't receive or give a business gift of total value more than INR 8000 a calendar year. Please read the Policy on Business Gifts & Entertainment on CFM portal for more details.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 79,
        categoryName: "Career Progression",
        parentCategory: 75,
        categoryDescription: "Career Progression",
        icon: null,
        questionsAndAnswers: [
          {
            id: 215,
            question: "What is the eligibility to apply for internal Jobs ?",
            answer:
              "Employee who have completed 18 months in their current role are eligible to apply for internal job and the current open positions are available on Workday.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 216,
            question: "How do I apply for an Internal Job (IJP)?",
            answer:
              "Login into Workday> Menu> Career> Find Jobs - MassMutual>Apply.",
            yesCount: 0,
            noCount: 0,
            link: "Link for MassMutual India Careers page (https://www.myworkday.com/massmutual/d/task/1422$3893.htmld)",
          },
          {
            id: 217,
            question: "What is the promotion eligibility?",
            answer:
              "Employee should have completed 18 months in the current role. Managers should initiate promotion based on performance and availability of role. Please refer to Career Progression policy on CFM portal for more details.",
            yesCount: 0,
            noCount: 0,
            link: "Link for CFM portal (https://mmfin.cfmnetwork.com/Books.aspx?Section=1)",
          },
          {
            id: 218,
            question:
              "Whom should I connect with if I have query on promotion?",
            answer:
              "Employees can reach their respective manager / HR (mmgbsiindia@massmutual.com) for any career progression related questions.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 219,
            question: "What is Competency Framework?",
            answer:
              "The Competency Framework is a comprehensive framework that outlines the key technical competencies, behaviours and proficiency levels required for success in various unique roles. It will help you understand the competencies needed to excel in your current role and progress to the next level. Please refer MX India Page>Human Resources> Career Pathing for more details",
            yesCount: 0,
            noCount: 0,
            link: "Link to Career Pathing resources (https://massmutual.sharepoint.com/sites/MarComHRSharePoint/Shared%20Documents/Forms/AllItems.aspx?ga=1&id=%2Fsites%2FMarComHRSharePoint%2FShared%20Documents%2FHR%20Resources%2FCareer%20Pathing&viewid=b994c9c6%2Dbe55%2D4220%2Db651%2Da106bef3bad0)",
          },
          {
            id: 220,
            question: "What is Career Architecture?",
            answer:
              "The Career Architecture provides a clear roadmap for your professional growth. It outlines different career paths within our organization and the competencies and experiences required to advance in each path. It will help you make informed decisions about your career trajectory and identify opportunities for growth and development.Please refer MX India Page>Human Resources> Career Pathing for more details",
            yesCount: 0,
            noCount: 0,
            link: "Link to Career Pathing resources (https://massmutual.sharepoint.com/sites/MarComHRSharePoint/Shared%20Documents/Forms/AllItems.aspx?ga=1&id=%2Fsites%2FMarComHRSharePoint%2FShared%20Documents%2FHR%20Resources%2FCareer%20Pathing&viewid=b994c9c6%2Dbe55%2D4220%2Db651%2Da106bef3bad0)",
          },
          {
            id: 221,
            question: "What is an Employee Talent Card?",
            answer:
              "An employee Talent Card is a function available on Workday, it tracks all employee details - current role, job history, education, certifications, career aspirations, strengths, development areas, and more! Please follow the path below to update your Talent Card in Workday. Workday>Your Profile>View Profile>Career. Employees and respective managers are able to generate talent card in PDF of key talent information.",
            yesCount: 0,
            noCount: 0,
            link: "Link for Workday (https://www.myworkday.com/massmutual/d/home.htmld)",
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 80,
        categoryName: "Company Policies",
        parentCategory: 75,
        categoryDescription: "Company Policies",
        icon: null,
        questionsAndAnswers: [
          {
            id: 249,
            question: "Where do we find company policies?",
            answer:
              "All company policies are available for employees on CFM (through Okta).",
            yesCount: 0,
            noCount: 0,
            link: "Link for CFM portal (https://mmfin.cfmnetwork.com/Books.aspx?Section=1)",
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 81,
        categoryName: "Conflicts of Interest Policy",
        parentCategory: 75,
        categoryDescription: "Conflicts of Interest Policy",
        icon: null,
        questionsAndAnswers: [
          {
            id: 222,
            question: "What is a potential conflict of interest?",
            answer:
              "There are 2 types of potential conflicts of interest -\n Outside Employment- If an employee takes part in any activity that enhances or supports a competitor\u2019s position or accepts simultaneous employment with any other company or business entity.\n Working with Family & Friends- Employment of certain family members, as well as romantic relationships among employees in reporting or oversight positions. In case of any non-compliance, please report it to HR team. The employee is obligated to report the relationship to their manager and HR contacts.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 82,
        categoryName: "Disciplinary & Grievance Redressal",
        parentCategory: 75,
        categoryDescription: "Disciplinary & Grievance Redressal",
        icon: null,
        questionsAndAnswers: [
          {
            id: 223,
            question:
              "Whom should I connect with if I have any disciplinary issue or grievance?",
            answer:
              "Please report the issue to your reporting manager or HR ( mmgbsiindia@massmutual.com) or email directly to Disciplinary committee (mmgbsidisciplinarycommittee@massmutual.com). Please read Disciplinary & Greivance Redressal policy in CFM portal for more details",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 83,
        categoryName: "HR Letters Visa/ Home loan/ Address proof",
        parentCategory: 75,
        categoryDescription: "HR Letters Visa/ Home loan/ Address proof",
        icon: null,
        questionsAndAnswers: [
          {
            id: 248,
            question:
              "If I need to apply for home loan/ Visa/ Long vacation and require few details in form of letter, whom should I request this for?",
            answer:
              "You can drop an email to HR team (mmgbsiindia@massmutual.com) with the purpose and details.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 84,
        categoryName: "Leave Policy",
        parentCategory: 75,
        categoryDescription: "Leave Policy",
        icon: null,
        questionsAndAnswers: [
          {
            id: 226,
            question: "Do we get any adoption leaves in MMI?",
            answer:
              "For women employees, 12 weeks and for male employees, 3 weeks of paid leaves are given for adopting a child below the age of three [3] months from the date of adoption. And this leave type is inclusive of weekends.\n  are given for adopting child below the age of three [3] months from the date of adoption.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 227,
            question: "What is bereavement leave policy in MassMutual India?",
            answer:
              "Employees are eligible for up to five [5] working days (continuous) of paid leave in the case of death of an immediate family member (parents, spouse, children, siblings, parents-in-law and grandparents).",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 228,
            question:
              "How can we apply for Compensatory off? Can we carry forward the compensatory off?",
            answer:
              "Compensatory off request should be initiated in weekly time entry in Workday> Time . Post approval of time entry , employees are allowed to apply for Compensatory Off in Workday> Absence with in 90 calendar days of date of worked.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 229,
            question: "How many category of leaves are provided to employees?",
            answer:
              "There are various categories of leaves at MMI. Paid Time Offs, Flexible holidays, Sick leaves, Floating Holiday, Maternity & Adoption leaves, Paternity leaves, Bereavemnet leaves, Relocation leaves, Extended leaves and Leaves on loss of pay.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 230,
            question: "What is the eligibility to apply for extended leaves?",
            answer:
              "To avail extended leave benefit, an employee should have served a continuous service with the MassMutual GBSI for a minimum of two [2] years in current employment. Please refer to the Leaves policy > Extended leaves section on CFM portal",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 231,
            question: "How many flexible holidays are we entitled for?",
            answer:
              "Employees are entitled to 10 holidays (national & festival) in a calendar year, out of which four/ five (4/5) statutory holidays is mandatory for all employees and they can choose the remaining holidays (5/6) from the flexible holiday calendar. Employees in Policy Holder Services & New Business will follow 10 fixed US holidays.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 232,
            question: "How can we apply for flexible holidays?",
            answer:
              "Employee is required to apply for the flexi holiday prior to the preferred date on Workday. Number of flexi holidays may change every year which is communicated in the beginning of the calendar year.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 233,
            question:
              "My actual Birthday is different from my birthday in my records, how can I avail the floating holiday?",
            answer:
              "You can send a request to the MMGBSI HR (mmgbsiindia@massmutual.com) marking your manager in the email with your actual birthday and requesting to apply for leave on the day.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 234,
            question:
              "What are the floating holidays? How can we avail leave on birthday/wedding anniversary?",
            answer:
              "Employees can avail 1 day holiday towards his/her birthday/wedding anniversary during a calendar year. Floating holidays falling on weekends cannot be availed and neither can be carried forward or encashed.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 235,
            question:
              "What is the process for Leave encashment at MassMutual India?",
            answer:
              "A maximum of 60 leaves can be carried forward to the next year. Leave balance below 60 will be carried forward to the following year by default. Leaves more than 60 days will be encashed (on basic salary) at the beginning of the following year.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 236,
            question: "What are loss of pay leaves? How can I avail them?",
            answer:
              "Upon exhaustion of paid leaves, employees are eligible for ninety [90] calendar days of leaves on loss of pay which can vary on case to case basis. For further details, reach out to your manager/ HRBP.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 237,
            question:
              "What is the maternity leave extension policy beyond maternity leave policy?",
            answer:
              "Any leave beyond the prescribed duration will be treated as unpaid leave unless the employee has enough earned leave balance to his/her credit to use, which is subject to approval by the leave approving authority.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 238,
            question:
              "What is the amount of maternity bonus? How to request for it or what is the process?",
            answer:
              "Eligibility for maternity bonus of Rs.3,500. Women employees must share their reference medical documents with discharge summary details with MMGBSI HR team at (mmgbsiindia@massmutual.com). ML Bonus will be processed in monthly payroll upon reciept of documents.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 239,
            question: "How many days of Maternity leaves am I eligible for?",
            answer:
              "As per Maternity Act, you are eligible for twenty-six [26] continuous weeks of paid Maternity Leave for the first two [2] instances of childbirth. Sixteen [16] continuous weeks of paid Maternity Leave for third and subsequent instance of childbirth. These leaves are inclusive of weekends.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 240,
            question: "What is Paid Time Off eligibility?",
            answer:
              "MassMutual India provides 25 Paid Time Off per year. For new joiners leaves are credited on a prorated basis from the date of joining.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 241,
            question:
              "Do we follow a financial or calendar year for leaves at MMI?",
            answer:
              "Calendar year from Jan to Dec is followed at MassMutual India.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 242,
            question:
              "How many days of Paternity leaves am I eligible for? What is the process to apply?",
            answer:
              "Paternity leaves are applicable for all male employees, who have been on payroll for 80 calendar days, paid leaves up to [3] weeks or [21 calendar days are granted on the basis of documents submission. Paternity leaves must be availed within 90 days of childbirth. They can be taken on a continous or intermittent basis.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 243,
            question:
              "What is the eligibility for the relocation leaves and how can I avail it?",
            answer:
              "Employees (new hires or transfers) who are eligible for relocation benefits would be granted two [2] days of leaves. Relocation leaves must be availed within 30 days of joining at the new location. New hires should take approvals from Talent Acquisition/ hiring team before availing the relocation leaves.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 244,
            question: "How many sick leaves do we get? Are they paid leaves?",
            answer:
              "Employees are eligible for 5 days of paid sick leaves. If sick leave extends beyond 03 working days, employee must produce a medical certificate from a registered medical practitioner.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 245,
            question: "Can we encash or carry forward our sick leaves?",
            answer: "Sick leaves cannot be encashment or carry forwarded.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 246,
            question:
              "How many leaves can I avail in case of miscarriage/ termination of pregnancy?",
            answer:
              "6 weeks (42 calendar days) of paid leaves are provided in case of miscarriage or termination of pregnancy. Employees are required to discuss with Manager/HRBP to avail the Miscarriage leave by providing supporting medical document.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 247,
            question:
              "Are employees allowed to take leave during notice period?",
            answer:
              "Employees who have resigned are allowed to take leave on discretion of the reporting manager and may lead to extension of the notice period as well. Notice period cannot be adjusted against the leave balance available to the employee.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 85,
        categoryName: "Policy on Dress Code",
        parentCategory: 75,
        categoryDescription: "Policy on Dress Code",
        icon: null,
        questionsAndAnswers: [
          {
            id: 250,
            question: "What is the dress code at MMI?",
            answer:
              "Dress appropriately in smart business casuals and in accordance with Policy on Dress Code. Please review Dress Code policy available in CFM portal for more details",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 86,
        categoryName: "Policy on Remote Working/ Work from Home",
        parentCategory: 75,
        categoryDescription: "Policy on Remote Working/ Work from Home",
        icon: null,
        questionsAndAnswers: [
          {
            id: 251,
            question:
              "What is the eligibility to request for temporary work from home?",
            answer:
              "Employees may discuss with Manager for temporary work form home option.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 87,
        categoryName: "Prevention of Harassment",
        parentCategory: 75,
        categoryDescription: "Prevention of Harassment",
        icon: null,
        questionsAndAnswers: [
          {
            id: 252,
            question:
              "Whom should I connect with regards to any issue of harassment?",
            answer:
              "Please report the issue directly to Internal Committee (mmgbsiic@massmutual.com).",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 88,
        categoryName: "Probation Extension",
        parentCategory: 75,
        categoryDescription: "Probation Extension",
        icon: null,
        questionsAndAnswers: [
          {
            id: 253,
            question:
              "If my team member has not completed the 6 months probation, can I initiate a probation extension?",
            answer:
              "The process of extension of probation must be initiated immediately when the employee completes the actual probation period of six [06] months or anytime after 3 months of employment if the performance is not meeting the expectations. Please reach out to your HRBP for any questions.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 89,
        categoryName: "Salary Advance",
        parentCategory: 75,
        categoryDescription: "Salary Advance",
        icon: null,
        questionsAndAnswers: [
          {
            id: 254,
            question: "Do we have any loan or salary advance option?",
            answer:
              "Employees can request for advance salary for their medical emergency or that of an immediate family member only. Please read Salary Advance policy in CFM portal for more details and reach out to your HRBP for further query and process.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 90,
        categoryName: "Talent & Performance",
        parentCategory: 75,
        categoryDescription: "Talent & Performance",
        icon: null,
        questionsAndAnswers: [
          {
            id: 210,
            question:
              "What is the annual compensation revision effective date?",
            answer: "The revised compensation will be effective from April 1.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 224,
            question:
              "What is the difference between Performance Improvement Plan ( PIP)& Probation Extension",
            answer:
              "Managers can initiate Performance Improvement Plan for full-time team member/s who do not meet the expectations. Employees who are in probation period and their performance is not as expected, Managers can initiate Probation Extension Request or Performance Improvement plan post consultation with HRBP in workday.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 225,
            question: "How to initiate a disciplinary action for an employee?",
            answer:
              "Please send query to HRBP (mmgbsiindia@massmutual.com). Managers are allowed to initiate disciplincary action in Workday. Path :Workday> Search for start a discilplinary action> Fill in the required details> Select the relevant template.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 255,
            question: "How to add commitments/check-ins in Workday?",
            answer:
              "Commitments on Workday need to be added by partnering with your manager to set individual commitments based on business goals and check-ins against those commitments should be done twice a year. Workday>Performance> My Talent and Performance>Commitments/Start my Check-Ins.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 256,
            question: "I want to edit my commitment. How can I do it?",
            answer:
              "To edit the commitments, go to Workday> your profile> Performance>Commitments> Edit",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 257,
            question:
              "How can I cancel my check-in, the comments are incorrect and I want to edit them?",
            answer:
              "Please email to HRBP team (mmgbsiindia@massmutual.com)along with a justification for the necessary action.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 258,
            question: "What are development goals? How do I add them?",
            answer:
              "Development planning helps employees grow, develop, and achieve their goals while helping them perform at their best. Please go to Workday>Your Profile>View Profile>Career>Development Goals.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 259,
            question: "What is the performance cycle considered in MMI?",
            answer:
              "January to December is the performance cycle considered in MMI for all evaluations. Please follow communications from HR for commitments and check-ins on Workday.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 260,
            question: "Who are eligible for annual apprisal revision?",
            answer:
              "Employees active in system before 31st of Dec are part of annual appriasal revision.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 261,
            question: "What is a talent card? Why should I fill it?",
            answer:
              "Talent Card is a tool that pulls data from Workday and provides you with a quick snapshot of your key talent. It includes crucial information, such as your current role, job history, education, certifications, career aspirations, strengths, development areas, and more. It can be used to elevate your professional journey and leverage career opportunities through IJPs.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 262,
            question: "How do I fill the talent card?",
            answer: "Please go to Workday>Your Profile>View Profile>Career.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 91,
    categoryName: "Employee Benefits",
    parentCategory: 0,
    categoryDescription: "Employee Benefits",
    icon: "BookmarkAdd",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 92,
        categoryName: "Annual Health Checkup",
        parentCategory: 91,
        categoryDescription: "Healthi Process & Details",
        icon: null,
        questionsAndAnswers: [
          {
            id: 274,
            question: "What is Annual Health Check up benefit?",
            answer:
              "Annual Heal checkup is a company sponsored free health checkup for all employees in any of listed diagnostic centers. MassMutual India has partnered with Healthi for Annual Free Health Checkup for our employees and their dependents (discounted self paid service) once a year.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 275,
            question: "Who is the point of contact/ support team for Healthi?",
            answer:
              "You may reach out to Healthi support contact number, or you can drop a mail to them as well at support@healthi.in / +91 78293 45677. Please reach HR (mmgbsiindia@massmutual.com) for additional details.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 276,
            question:
              "How can I book a slot for myself or my dependent's health checkup?",
            answer:
              "If you are a first time user, register yourself with your work email id/ contact on (https://www.healthi.in/w4/massmutual-ahc-2022)\n If you are an already registered user, login into Healthi with your work email id/ contact on (https://www.healthi.in/app/login) and book your annual health checkup slot. Just enter your area pincode and choose the nearest health centre from the list, your booking is done.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 93,
        categoryName: "Cafetaria Services",
        parentCategory: 91,
        categoryDescription: "Cafetaria",
        icon: null,
        questionsAndAnswers: [
          {
            id: 297,
            question:
              "Do we have any snacks, lunch or dinner provided by MassMutual India?",
            answer:
              "Breakfast, Lunch and Dinner are available in cafetaria on subsidized prices and free snacks are served in evening & mid-night for night shift employees.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 94,
        categoryName: "Childcare Reimbursement",
        parentCategory: 91,
        categoryDescription: "Childcare reimbursement process",
        icon: null,
        questionsAndAnswers: [
          {
            id: 263,
            question: "How can I reimburse tuition fee for my child?",
            answer:
              "Employees can reimburse tuition fees. They can provide invoice of the monthly expenses incurred towards his/ her child, below six yrs of age only, for daycare / cr\u00e8che (in the BSR TechPark premises or any other formal daycare). Monthly reimbursed amount would include tuition fee within the prescribed limit of INR 10,000/- per month per child.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 264,
            question: "How to avail childcare benefits?",
            answer:
              "Employees can send an e-mail to the payroll team (mmgbsipayroll@massmutual.com) with a copy of the child\u2019s birth certificate, reimbursement form, photograph and school reciept/invoice, within 30 days of payment. Birth certificate & photographs are required if employee is submiting claim for the first time. Please read child care reimbursement policy in CFM portal for additional details.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 95,
        categoryName: "Classifieds Page",
        parentCategory: 91,
        categoryDescription: "Classifieds Page",
        icon: null,
        questionsAndAnswers: [
          {
            id: 265,
            question: "What is MassMutual India classifieds page?",
            answer:
              "It is a unique platform / hub for MassMutual India employees for buying and selling within our MassMutual India community.MX Indai Page > Classified >",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 266,
            question: "How often can I list items on classifieds page?",
            answer:
              "Login to Mx India Page > Classified > Post an Item. Employee is advisted to go through the guidelines before posting.",
            yesCount: 0,
            noCount: 0,
            link: "https://massmutual.sharepoint.com/sites/mx2#/sitepages/viewallclassifieds.aspx",
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 96,
        categoryName: "Employee Assistance Program",
        parentCategory: 91,
        categoryDescription: "Employee Assistance Program Process & Details",
        icon: null,
        questionsAndAnswers: [
          {
            id: 270,
            question: "What is EAP?",
            answer:
              'Employee Assistance Program "EAP" is a confidential service, which equips and supports employees for a range of self-help resources as well as personalized help from professional counsellors. Issues on Family, Relationships, Anger, Stress, Parenting, Shift workstyle, Weight loss, Marriage, Sleep, Shyness, Work life balance, Loneliness, Smoking/ Alcohol etc can be addressed with professional and experience psychologists/ counsellors. We have partnered with 1to1help for all the above listed service.',
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 271,
            question: "How do I login or register for 1to1help?",
            answer:
              "Please login via (https://1to1help.net/) or download 1to1help application from Playstore/ Appstore. You can book a counselling session directly. Employee details are strictly confidential.",
            yesCount: 0,
            noCount: 0,
            link: "Link for Employee Assistance Program (EAP) - https://1to1help.net/",
          },
          {
            id: 272,
            question: "What is the point of contact/ support for 1to1help.net?",
            answer:
              "You can write email to (connect@1to1help.net) or call their support team on 18002588999/ 18002588121",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 97,
        categoryName: "Insurance benefit",
        parentCategory: 91,
        categoryDescription: "Insurance benefit",
        icon: null,
        questionsAndAnswers: [
          {
            id: 273,
            question:
              "What types of insurance benefits are provided to employees at MMI?",
            answer:
              "There are three types of insurance benefits given to employees - Group Mediclaim (Family Floater- 6 lakhs of base coverage with parental cap of 4 Lakhs), Term Life ( 3 times of Annual CTC) and Personal Accident (5 times of CTC). Please read Insurance Manual in India MX Page> Human Resources>Benefits",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 277,
            question:
              "Where can I check the list of registered hospitals for availing the medical insurance benefit?",
            answer:
              "You can check the complete list of network/ affiliated hospitals on FHPL portal. As per new IRDA rule, employees are allowed to get the cashless benefit even in not affiliated hospitals just by informing TPA - FHPL team in advance.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 278,
            question:
              "How can I add my spouse/newborn details to medical insurance?",
            answer:
              "New joiners will get dependent enrolment link form FHPL within 15-20 days of the start date and are allowed to add dependents during this window period. Employees can share the newborn details/spouse details (name, gender, date of birth,/marriage date) with HR team (mmgbsiindia@massmutual.com) within 15 days from the date of event.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 279,
            question: "What is the maximum coverage for medical insurance?",
            answer:
              "As a part of this is Employer Sponsored Program, employees are covered for a total Sum Insured of INR 600,000 per family and dependants with a cap of INR 4,00,000. Employees can opt for modular/top-up plan only at the time of joining the organization or at the timeof renewal of insurance.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 280,
            question: "Who in a family is covered under insurance?",
            answer:
              "Insurance provides cover for Employee, employee's spouse, 4 children and Parents / Parents-In-Law (Cross combination of Parents and Parents-In-Law is also provided only in case of death of one partner)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 281,
            question: "I want the link to the insurance portal?",
            answer: "FHPLUS :: Member details,Claims,Ecard,Network hospitals",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 282,
            question:
              "Where and when can I submit my claims for insurance reimbursement?",
            answer:
              "Claim request has to be submitted within 15 days from the date of discharge. Employees can submit claim in FHPL Portal or send claim forms to FHPL POC Nitin Madhukar Gulade <nitin.gulade@fhpl.net>",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 98,
        categoryName: "Internet Reimbursement",
        parentCategory: 91,
        categoryDescription: "Internet Reimbursement",
        icon: null,
        questionsAndAnswers: [
          {
            id: 283,
            question: "What is the maximum amount that can be reimbursed ?",
            answer:
              "Employees are entitled for broadband internet connection (for official purposes only) reimbursement up to INR 1000 per month. Please note that the Internet Reimbursement policy covers only the internet bill and no other additional charges such as platform fees, installation charges or late fees.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 284,
            question: "What is the process for Internet Bill Reimbursement?",
            answer:
              "Employees must submit their bills within 30 days from the bill/invoice date/expense report on Concur. Please refer to Policy on Internet Reimbursement on CFM portal for more details.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 285,
            question:
              "If I have opted for 1/3 months or 6-month plan, can I reimburse it as part of Internet Bill Reimbursement?",
            answer:
              "Yes, you can still claim for reimbursement after the duration of the bill is completed. Please reach Mlist: MMGBSI - Accounts Payable <MMGBSI-AccountsPayable@iuo.massmutual.com> team for any queries.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 286,
            question: "Can employees on ML claim the Internet Reimbursement?",
            answer:
              "Yes, employees on ML can claim the Internet Reimbursement in accordance to the policy.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 99,
        categoryName: "Merchandise Portal",
        parentCategory: 91,
        categoryDescription: "Merchandise Portal",
        icon: null,
        questionsAndAnswers: [
          {
            id: 287,
            question: "What is MassMutual India Brand Bazaar?",
            answer:
              "MassMutual India Brand Bazaar is a merchandise portal where our employees can purchase MassMutual India branded merchandise at subsidised rates.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 288,
            question:
              "How can I buy MM branded merchandise on Merchandise portal?",
            answer:
              "Register yourself with the company email ID on the website and you can purchase the goodies available on the portal.",
            yesCount: 0,
            noCount: 0,
            link: "Link for Merchandise portal - https://massmutualindiabrandbazaar.companyswag.store/index.php?route=common/home",
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 100,
        categoryName: "Mobile Bill Reimbursement",
        parentCategory: 91,
        categoryDescription: "Mobile Bill Reimbursement",
        icon: null,
        questionsAndAnswers: [
          {
            id: 289,
            question: "What is the mobile bill reimbursement process?",
            answer:
              "Employees who are Manager or at levels above are provided with a phone from the company with a corporate mobile connection. They can reimburse the bill based on actuals on Concur.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 290,
            question:
              "I have not availed company phone connection, can I claim my monthly mobile bill?",
            answer:
              "If employees (at Manager & above level) are not availing their company phone connection, then they can reimburse the monthly mobile expenses at actuals.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 101,
        categoryName: "Relocation Benefit",
        parentCategory: 91,
        categoryDescription: "Relocation Benefit",
        icon: null,
        questionsAndAnswers: [
          {
            id: 291,
            question:
              "When can we submit the bills for the relocation benefit?",
            answer:
              "Eligible employees need to avail/reimburse the relocation benefits within 90 days of joining the organization. Approvals from TA team is mandatory before availing the relocation benefits.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 292,
            question:
              "How to claim for the reimbursement of the relocation bills?",
            answer:
              "To claim relocation reimbursement, you need to be submit the bills on Concur.",
            yesCount: 0,
            noCount: 0,
            link: "Link for Concur - https://us2.concursolutions.com/",
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 102,
        categoryName: "Shift allowances",
        parentCategory: 91,
        categoryDescription: "Shift allowances",
        icon: null,
        questionsAndAnswers: [
          {
            id: 293,
            question:
              "What are the different shift allowances in MassMutual India?",
            answer:
              "The shift allowances are applicable to all employees of MMI at a job designation between Analyst to Lead/ Architect. There are 3 shifts - Morning, Afternoon & Night Shift. Please go through the shift allowances policy on CFM portal for more details.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 294,
            question:
              "Is there any overtime or on-call allowance provided to employees?",
            answer:
              "Over time allowances are applicable to all employees at MMI at job designation between Analyst to lead/ Architect if they work beyond regular hours with Manager's authorization. On-call allowance is calculated per day on basis of providing support on call beyind working hours. Both these allowances are only provided basis Manager's authorization.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 103,
        categoryName: "Team Outing",
        parentCategory: 91,
        categoryDescription: "Team Outing",
        icon: null,
        questionsAndAnswers: [
          {
            id: 295,
            question: "What is the Team Outing budget?",
            answer:
              "Every full time employee is eligible for a quarterly budget for team outings of INR 1500, which can be utilized for any team activity planned by the respective department.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 104,
        categoryName: "Teleconsultation Services",
        parentCategory: 91,
        categoryDescription: "About Connect and Heal",
        icon: null,
        questionsAndAnswers: [
          {
            id: 267,
            question: "What is Connect and Heal?",
            answer:
              "Connect and Heal is a virtual health care platform which offers variety of services, video & audio teleconsulations, emergency ambulance services etc. Please refer to the user guide to download the app or use the services on Mx India page under HR Resources.",
            yesCount: 0,
            noCount: 0,
            link: "Link for Connect and Heal website login - https://connectandheal.com/#/login",
          },
          {
            id: 268,
            question: "What are services covered under Connect & Heal?",
            answer:
              "There are various services provided by Connect and Heal. Company sponsored services include, adding up to 5 dependents in your family, Video & Audio (Teleconsultations) with 30+ specialties experts, Emergency Ambulance service within 8 kms of radius around you and your dependents. Self-paid services includes, up to 20% off on pathology lab tests, up to 40% off on CNH Health Packages, up to 15% off on medicine delivery at home, up to 10% off OPD in-person consultations at Clinics and Hospitals, up to 20% off on CNH Gym Subscriptions and Support for vaccinations.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 269,
            question:
              "What is the point of contact/ Support for Connect and Heal?",
            answer:
              "Please write to email id (massmutual.support@connectandheal.com) or call on the support helpline at 9111891118.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 105,
        categoryName: "Transport",
        parentCategory: 91,
        categoryDescription: "Transport",
        icon: null,
        questionsAndAnswers: [
          {
            id: 296,
            question:
              "If I am not using the office transport, can I get fuel reimbursement of allowance if I am using my own transport?",
            answer:
              "No employees will not get any fuel reimbursement if not using the office transport.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 106,
        categoryName: "Types of Benefits",
        parentCategory: 91,
        categoryDescription: "Types of Benefits",
        icon: null,
        questionsAndAnswers: [
          {
            id: 298,
            question: "What all benefits are provided by MassMutual India?",
            answer:
              "MassMutual India provides various benefits covering Professional development, Rewards & Recognition, Transportation, Food, Health & Wellness, Team Building, Relocation and Perks/Fringe Benefits",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 107,
    categoryName: "Employee Committees",
    parentCategory: 0,
    categoryDescription: "Employee Committees",
    icon: "Diversity2",
    questionsAndAnswers: [
      {
        id: 299,
        question: "What are the employee committees we have?",
        answer:
          "Our committees are based on various themes and interests of employees: Sports & Adventure, \n Health & Wellness, \n Corporate Social Responsibility,\n Diversity, Equity & Inclusion, \n Campus Outreach,\n Fun, Arts & Culture, \n Ink & Insights and\n Innovation & Ideation",
        yesCount: 0,
        noCount: 0,
        link: null,
      },
      {
        id: 300,
        question:
          "How & when can I enroll for an employee committee I am interested in?",
        answer:
          "The employee committees' chairpersons & members are revised every two years. A survey is rolled out to all employees by the HRBP team asking for voluntary nominations at the beginning of the year. New hires in the organization if interested to join an employee committee at any point in time of the year can do so but as back-up members. \n Interested new joiners can enroll in any employee committees of their choice, by dropping a mail to the respective employee committees.",
        yesCount: 0,
        noCount: 0,
        link: null,
      },
      {
        id: 301,
        question: "What are the employee committees email ids?",
        answer:
          "Email IDs for each committee are (MMGBSISportAdventureCommittee@massmutual.com), (MMGBSIHealthWellnessCommittee@iuo.massmutual.com), (MMGBSICSRcommittee@massmutual.com), (MMGBSIDiversityInclusionCommittee@iuo.massmutual.com), (MMGBSICampusOutreachCommittee@iuo.massmutual.com)\n (funcommittee@massmutual.com), (MMIndia_Inks&Insights@massmutual.com), (InnovationandIdeationCommittee@massmutual.com)",
        yesCount: 0,
        noCount: 0,
        link: null,
      },
      {
        id: 302,
        question: "Where can I find the guidelines for employee commitees?",
        answer:
          "The employee committee guidelines are uploaded on Mx India Page, under HR Resources.",
        yesCount: 0,
        noCount: 0,
        link: null,
      },
      {
        id: 303,
        question: "Can we enroll for any committee in the middle of the year?",
        answer:
          "If a committee is short of active members anytime during the term, the respective chairperson can work with HRBP team to drive new admissions into the committee.",
        yesCount: 0,
        noCount: 0,
        link: null,
      },
    ],
    subcategories: [],
  },
  {
    categoryId: 108,
    categoryName: "Training and Development",
    parentCategory: 0,
    categoryDescription: "Training and Development",
    icon: "ModelTraining",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 109,
        categoryName: "eLearning Platform",
        parentCategory: 108,
        categoryDescription:
          "Our e-learning platforms: Udemy, Degreed, LinkedIN Learning offers a comprehensive range of courses designed to enhance skills and knowledge at your own pace, anytime and anywhere. With interactive content and expert instructors, it provides an engaging and flexible learning experience for professionals across various fields.",
        icon: null,
        questionsAndAnswers: [
          {
            id: 338,
            question: "How can I get access to Udemy?",
            answer:
              "To access Udemy, please send an email to Talent Management POC at mmgbsiindia@massmutual.com. Udemy invite will be sent to you over email, based on availability of licenses. Click on the email and enter your login credentials i.e. your work email ID. You will have access to Udemy now.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 339,
            question: "Where do I access Udemy?",
            answer:
              "Udemy can be accessed from your work laptop, mobile and personal laptop using your work email ID using the link: https://www.udemy.com/",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 340,
            question: "How do I login to Udemy?",
            answer:
              "To login to Udemy, use this link: https://www.udemy.com/. Enter your work email ID and password you gave at the time of setting up Udemy access.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 341,
            question: "Can I login through my personal email ID?",
            answer:
              "No, you cannot login through your personal email ID. You are required to only use MassMutual work email ID to login.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 342,
            question: "Can I access Udemy from my phone?",
            answer:
              "Yes, you can access Udemy from your phone. You will have to download Udemy Business App and login using your work credentials. Once done, you can access Udemy from your mobile!",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 343,
            question: "Can I access Udemy through my personal laptop?",
            answer:
              "Yes, you can access Udemy thorugh your personal laptop using your work email credentials.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 344,
            question: "Am I required to pay for Udemy license/course?",
            answer:
              "MassMutual India offers Udemy license as a benefit to all our employees. Employees are not required to pay for this benefit.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 345,
            question: "What all courses am I eiligible to take up on Udemy?",
            answer:
              "All courses available on Udemy can be accessed if you have the Udemy license.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 346,
            question:
              "For technology courses, is there any option for hands-on practice?",
            answer:
              "Yes, you have an option to access cloud labs on Udemy. You are required to have Udemy Pro license for the same. If you do not have it, reach out to Talent Management POC at mmgbsiindia@massmutual.com to get access to it.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 347,
            question:
              "Are cloud labs available for technical courses on Udemy?",
            answer:
              "Yes, cloud labs are available as a part of UPro license. You can check cloud labs available in Udemy provided you have UPro license.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 348,
            question:
              "How can I access cloud labs for technical courses on Udemy?",
            answer:
              "To access cloud labs on Udemy, you are required to have UPro license. If you do not have UPro subscription, please reach out to Talent Management POC at mmgbsiindia@massmutual.com to get access to it.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 349,
            question:
              "I have lost my access to Udemy. Whom should I reach out to?",
            answer:
              "Please reach out to Talent Management POC at mmgbsiindia@massmutual.com.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 350,
            question:
              "What categories of online courses are available on Udemy?",
            answer:
              "There are various categories like Business Operations, Cloud Computing, Cyber Security, Data Science, Development, IT Operations, Language Learning, Leadership & Manageement and Management available on Udemy. You can explore any of the courses from the categories given.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 351,
            question:
              "I have a query/concern related to Udemy. Whom should I reach out to?",
            answer:
              "Please reach out to Talent Management POC at mmgbsiindia@massmutual.com.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 352,
            question: "Who is eligible to participate in Udemy campaigns?",
            answer:
              "All employees of who have access to Udemy are eligible to participate in Udemy campaigns.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 353,
            question: "How do I check my progress on Udemy?",
            answer:
              "You can check your progress on Udemy by logging into your account> Go to My Learning. You would be able to see all the courses in progress or completed.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 354,
            question: "How do I enroll for a course in Udemy?",
            answer:
              "To enroll for a Udemy course, you should click on the Udemy course you desire to enroll in and then click on Enroll now. And you are all set!",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 355,
            question: "How do I drop from a course on Udemy?",
            answer:
              'To drop from a Udemy course, you should click on the Udemy course you desire to drop from and then click on three vertical dots from the top right. You will see a drop-down from which you should select "Unenroll from course". Once you click on that, you will get a prompt to review your decision, click on OK. And you are done!',
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 356,
            question: "What happens if I am inactive on Udemy?",
            answer:
              "You are required to be active for minimum of 2 hours on Udemy in a month.Failing which will deactivate the employee's access.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 357,
            question: "How do I access Degreed?",
            answer:
              "You can access Degreed through Okta page. Once you are logged into Okta, go to Degreed app. Click on it and you will be directed towards Degreed.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 358,
            question: "How do I access LinkedIn Learning?",
            answer:
              "You can access LinkedIn Learning through Okta page. Once you are logged into Okta, go to LinkedIn Learning app. Click on it and you will be directed towards LinkedIn Learning.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 110,
        categoryName: "Induction",
        parentCategory: 108,
        categoryDescription:
          "The induction process is an introduction to the company, its culture, and your role, designed to help you settle in smoothly. It includes an overview of key policies, procedures, company values and initial training to get you started on the right foot.",
        icon: null,
        questionsAndAnswers: [
          {
            id: 370,
            question: "Who sends the invite for induction?",
            answer:
              "Talent Management POC will send an invite for induction. You will receive the invite once your onboarding is over.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 371,
            question:
              "What are the consequences if we are not attending the induction?",
            answer:
              "If you miss induction, 'no-show' will be marked and an email will be triggered to your manager. You are required to inform Talent Management Team to invite you for the next induction since it's a mandatory training to attend.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 372,
            question: "Is Induction a mandatory session to attend?",
            answer:
              "Yes, Induction is a crucial part of your onboarding and it is important as it will help you understand the company policies, culture and values.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 373,
            question: "When is the induction scheduled ?",
            answer:
              "Induction is scheduled once a month. You may check out the Talent Development Calendar to know the next induction date.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 374,
            question: "Can I attend induction virtually?",
            answer:
              "Induction can be attended through both classroom as well as virtual mode.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 375,
            question: "Can I attend induction in-person?",
            answer:
              "Yes, you can induction in-person! We offer both classroom and virtual mode to attend the induction.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 376,
            question:
              "Whom should I inform in my team that I am attending induction?",
            answer:
              "You should inform your Manager that you are attending the induction so that they can plan and adjust your deliverables in your absence.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 377,
            question: "How can I enroll for Induction ?",
            answer:
              "You will be sent a calendar invite over email for induction.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 378,
            question:
              "Whom should I reach out to If I have any challenges about attending induction?",
            answer:
              "Please write to Talent Management POC at mmgbsiindia@massmutual.com.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 379,
            question: "What is covered in the induction?",
            answer:
              "The aim of induction is to make new joiners aware of company policies, culture, values and about various departments in the organization.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 380,
            question: "What is the duration of the induction?",
            answer: "The induction if a full day program 10:00 AM to 5:00 PM",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 111,
        categoryName: "LOMA",
        parentCategory: 108,
        categoryDescription:
          "LOMA is a global trade association providing professional development, learning, and research to the insurance and financial services industry. It offers certifications and resources that help professionals deepen their industry knowledge and advance their careers.",
        icon: null,
        questionsAndAnswers: [
          {
            id: 359,
            question: "What is LOMA?",
            answer:
              "LOMA, (formerly the Life Office Management Association) working together with LIMRA (formerly Life Insurance Marketing and Research Association) under the umbrella organization LL Global is an American trade associations for the insurance industry in the United States. LOMA offers an employee training and development program used by the majority of American life insurance companies, and by life insurance companies in over 70 other countries worldwide.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 360,
            question: "Who is elligible to take up the LOMA Certification?",
            answer: "All employees are eligible to take up LOMA certification.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 361,
            question:
              "What is the process for enrolling for LOMA Certification?",
            answer:
              "Employees will have to register on LOMA first using their MassMutual email ID and share the registration ID with the Talent Management SPOC. The Talent Management SPOC will enroll you for the desired LOMA certification.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 362,
            question: "Can I enroll directly to LOMA ?",
            answer:
              "You can enroll directly on LOMA however, you will not be eligible for a reimbursement. Hence, we encourage you to route it through Talent Management SPOC.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 363,
            question:
              "Whom should I reach out to for enrollment for LOMA Certification?",
            answer:
              "You can reach out to Talent Management SPOC to enroll in LOMA certification.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 364,
            question:
              "I am a new joiner. Can I enroll for the LOMA Certification?",
            answer:
              "Yes, you can enroll for LOMA certification. All Full Time Employees are eligible for a reimbursement under Training & Certification Reimbursement policy from the very first day of their joining the organization.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 365,
            question:
              "Should I pay for LOMA Certification and then get it reimbursed?",
            answer:
              "Please do not pay for it since you can avail 50% discount if you do it through the MassMutual India.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 366,
            question: "What are the courses available on LOMA?",
            answer:
              "You can check out the courses available on LOMA website. Please use this link to explore the courses: https://www.loma.org/en/professional-development/catalog/",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 367,
            question:
              "Do I have to sign an employee undertaking form for LOMA Certification?",
            answer:
              "Yes, you are required to sign the employee undertaking form for LOMA certification, for the investment that is being made in your professional development.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 368,
            question:
              "Is there any approval required for enrolling for LOMA Certification?",
            answer:
              "Yes, as per the Training & Certification Reimbursement policy, you a re required to have approval from the Department Head and Reporting manager.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 369,
            question:
              "Can I use my personal laptop for completing the LOMA Certification ?",
            answer:
              "Yes, you can use your personal laptop for completing the LOMA certification as long as it meets the LOMA configuration.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 112,
        categoryName: "Talent Development Calendar",
        parentCategory: 108,
        categoryDescription:
          "The Talent Development Calendar is a curated schedule of training sessions in various categories: Professional Skills, Leadership Skills, Process Skills, Domain Skills, Technical skills, Values & Culture and Certifications, workshops, and learning opportunities designed to enhance your skills and professional growth throughout the year.",
        icon: null,
        questionsAndAnswers: [
          {
            id: 304,
            question:
              "What are the various learning platforms provided by MassMutual India?",
            answer:
              "MassMutual India provides In-house trainings and e-Learning platforms to employees for upskilling. Talent Management team releases the training calendar on the 25th of every month consisting of training in various categories: Technical skills training, Professional and Soft skills development, Leadership training, Domain skills, Process skills, Compliance training, Webinars and industry-specific certifications. MassMutual India also provides e-learning platforms - Udemy, Degreed , LinkedIn learning & Digital courses on Workday.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 305,
            question:
              "How can I find out about upcoming trainings scheduled this month?",
            answer:
              "You can find information regarding upcoming training sessions on MassMutual India's intranet- Mx India under the Learning and Development section or through regular email announcements from the Talent Management team. Please watch our in-house digital displays as well for Training calendar.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 306,
            question: "How do I enroll for a training?",
            answer:
              "To enroll for a traning, go to Workday> Learning> Discover> Browse Learning> Type Training name with prefix MMGBSI. Once done, select your desired schedule and click on Submit. You will receive an email notifying you about the training program.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 307,
            question: "What types of training programs are offered?",
            answer:
              "MassMutual India provides a various training programs on business needs, including Technical skills trainings, Professional and Soft skills development, Process Skills, Domain Skills, Leadership training, Compliance trainings, Webinars and industry-specific certifications requested by Managers in Training Needs Analysis done annually.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 308,
            question:
              "What is the process for requesting Adhoc/Customized training ?",
            answer:
              "To request adhoc/customised training, please route the training requirement through your reporting manager to the Talent Management Team (mmgbsindia@massmutual.com)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 309,
            question: "How can I track my training progress on Workday?",
            answer:
              "You can track your training progress through Workday> Hamburger menu(three horizontal lines)on the top left> My Learning> My Progress",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 310,
            question:
              "How can I provide feedback on a training session I attended?",
            answer:
              "After each training session, Talent Management team will send feedback form link via email. You can also provide feedback directly by contacting the Talent Management team.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 311,
            question: "Can I suggest new training topics or programs?",
            answer:
              "Absolutely! We welcome suggestions for new training topic provided we have fifteen [15] people attending the training and the request should be routed through your reporting manager on business need.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 312,
            question:
              "Are there any leadership development programs available?",
            answer:
              "Yes, MassMutual India offers leadership development programs designed to prepare employees for managerial and leadership roles. These programs include development of leadership skills in collaboration with our learning partners. You can check the Talent Management Calendar on Mx India page to know more!",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 313,
            question:
              "What resources are available for learning new technical skills?",
            answer:
              "MassMutual India offers a variety of resources for learning new technical skills, including Online courses, In-House trainings, Webinars, Cloud Labs during the training and study material.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 314,
            question: "What is the criteria for attending trainings?",
            answer:
              "All employees are entitled to attend trainings from their start date in the organization. Employees are expected to attend all mandatory training sessions - Induction, Core values, Values & Cultures, Compliances trainings - Code of Ethics, Business Gift & Entertainment policy, POSH ,etc. For optional training, employees should seek approval from their managers to ensure it aligns with their development goals.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 315,
            question:
              "Are there any costs associated with the training programs?",
            answer:
              "Most internal training programs are free for employees except for the ones offered as certification courses. You are required to sign an employee undertaking form in case, you enroll since it is an investment from MassMutual India on your professional development. In case of external certifications or courses, you can get it reimbursed under the training and certification reimbursement policy.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 316,
            question: "I am working remotely. How can I attend trainings?",
            answer:
              "MassMutual India provides remote training options through online courses, virtual trainings/workshops, and webinars to ensure all employees have access to training, regardless of location. You can check which trainings are available virtually in the Talent Management Calendar or check courses on Udemy, Degreed, LinkedIN Learning or Workday.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 317,
            question:
              "How do I know which training programs are scheduled for upcoming months?",
            answer:
              "Talent Management team releases the training calendar on the 25th of every month via email. You can also check the Talent Management calendar on the MassMutual's intranet - Mx India page.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 318,
            question:
              "How can I know the topics that will be covered for training programs?",
            answer:
              "You can check the description of the training after you click on the training program. Go to Workday> Learning> Discover> Browse Learning> Type Training name with prefix MMGBSI> Click on Training name> Check Decription.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 319,
            question: "How can I drop from a training program?",
            answer:
              "Employees are allowed to drop from trainings only in case of any emergency or on business need, atleast one week prior to training scheduled date. \n Path: Workday> Hamburger menu(three horizontal lines on top left) on top left> Learning> My Learning> Drop enrolllment> Click on the course you want to drop from> Click OK.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 320,
            question:
              "Where can I find the FAQs pertaining to Talent Development Calendar?",
            answer:
              "You can find the FAQs for Talent Development on MassMutual Share Point> HR Resources> Talent Development. Please find the link for the same: https://massmutual.sharepoint.com/sites/MarComHRSharePoint/Shared%20Documents/Forms/AllItems.aspx?ga=1&id=%2Fsites%2FMarComHRSharePoint%2FShared%20Documents%2FHR%20Resources&viewid=b994c9c6%2Dbe55%2D4220%2Db651%2Da106bef3bad0",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 321,
            question: "Can I enroll for a certification course?",
            answer:
              "Yes, you can enroll for a certification course, provided you have approval from Department Head and Reporting manager for the same.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 322,
            question:
              "How do I pay for a certification course that is available in MassMutual India scheduled trainings ?",
            answer:
              "You are not required to pay for the certifications offered in the Talent Management Calendar. However, you are required to submit the Employee undertaking form to Talent Management team due to the investment made by MassMutual India in your professional development.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 323,
            question: "Can I only attend training and not certification?",
            answer:
              "You can only attend if the desired training is under Trainings category and not certification.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 324,
            question:
              "Will I receive an exam voucher if I enroll in any certification course?",
            answer:
              "Yes, you will receive an exam voucher from our learning partner post completion of your training.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 325,
            question:
              "What happens if I enroll for a training and I don't attend it?",
            answer:
              "Absence to enrolled trainings could block the training participation, for someone who could attend the trainings and also have financial implications to the organization. 'No-show' will be marked against you and you will be notified of the same over an email, with a copy to your manager. Repeated absences may lead to disqualification for attending future trainings.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 326,
            question:
              "What are the pre-requisites to enroll for certification courses?",
            answer:
              "Employee should apply for relevant certification course as per business need and should have Reporting manager and Department Head's approval over email for certification enrolments/reimbursements.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 327,
            question:
              "Do I need my manager's approval to attend the inhouse trainings?",
            answer:
              "Yes, you are required to take your manager's approval before you attend any trainings.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 328,
            question:
              "Can I attend trainings which are not relevant to my work?",
            answer:
              "You can attend trainings which are not relevant to your job, provided you have your manager's approval.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 329,
            question:
              "If the training duration is more than one day, and I attend the training for one day, will I still get the credit of learning hours?",
            answer:
              "You are required to be present for 75% of the training in order to get the learning hours credit.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 330,
            question:
              "How is my training attendance captured for the trainings I am attending?",
            answer:
              'If you have attended 75% of training, you will be marked as "Attended". If not, you will be marked "Not Attended".',
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 331,
            question:
              "I didn't attend the training for the entire duration. Will I get attendance/learning hours for it?",
            answer:
              'If you have attended 75% of training, you will be marked "Attended". If not, you will be marked "Not Attended".',
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 332,
            question:
              "Is 40 hours of learning mandatory for me to complete in a year?",
            answer:
              "Yes, we encourage you to complete 40 hours of learning each year. In case you have joined us in middle of the year, then mandatory learning hours will be calculated on pro-rated basis.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 333,
            question:
              "Is there targeted learning hours to be completed in a year?",
            answer:
              "Yes, we encourage you to complete 40 hours of learning each year as a mandate.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 334,
            question:
              "I joined in mid of the year. How many learning hours am I supposed to complete?",
            answer:
              "If you have joined us in mid of the year, then mandatory learning hours will be calculated on pro-rated basis.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 335,
            question:
              "What if I am not able to complete the required learning hours in a given year?",
            answer:
              "MassMutual India encourages everyone to grow professionally to focus on professional growth and trainings are a tool to aid your growth.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 336,
            question:
              "Where can I find the Talent Development Calendar on intranet?",
            answer:
              "You can find the Talent Development Calendar on MassMutual India's intranet - Mx India Page.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 337,
            question:
              "What is the frequency of publishing the training calendar?",
            answer:
              "Talent Management function shares the Talent Management Calendar, every 25th of the month over email from MMGBSI-HR.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 113,
        categoryName: "Workday Learning",
        parentCategory: 108,
        categoryDescription:
          "Workday Learning is a comprehensive platform that offers a range of training and development resources, allowing you to access, enroll in, and track your learning activities all in one place. It's designed to support your continuous growth by providing courses that align with your career goals.",
        icon: null,
        questionsAndAnswers: [
          {
            id: 381,
            question: "How can I enroll in Digital courses on Workday?",
            answer:
              'To enroll for a Digital course on Workday, you should go to Workday> Learning> Discover> Browse Learning> Type your desired course in the Search Bar> Click on the desired course> click on Enroll> Review the details> Click Submit. You will receive an email saying "You have been enrolled."',
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 382,
            question: "How can I drop from a Digital course on Workday?",
            answer:
              'To drop from a Digital course on Workday, you should go to Workday> My Learning> Click on your desired course you want to drop from> Click on Drop Course> A prompt will appear asking for reason to drop> Choose your reason to drop> Click on OK> Review your decision> Click on Submit. You will receive an email saying "You have dropped from the course."',
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 383,
            question: "What is a Digital course?",
            answer:
              "Digital courses are web based, self paced eLearning courses that you can register for and complete them at your own pace. There are a huge number of eLearning courses available on various topics if you wish to take up any of them.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 384,
            question:
              "Is it necessary to enroll for an Instructor-led/Virtual classroom training that I want to attend?",
            answer:
              "To attend any instructor led training, you will need to enroll for it. Upon enrolling, you will receive an invite with virtual classroom training details. You will have to enroll for the course before it becomes available for you to access under the \u2018My Learning\u2019 tab.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 385,
            question: "Can Contract to Hire (CTH) employees attend trainings?",
            answer:
              "Yes. Contract to Hire employees can attend the trainings in the training calendar as long as it is relevant and their Reporting Manager approves the same.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 386,
            question:
              "Is Reporting Manager\u2019s (RM) approval required to attend an Instructor-Led training?",
            answer:
              "For Full Time Employees, the system will send a notification seeking approval from Reporting Managers. However, to ensure your work is not disrupted while you are attending the training, we recommend that you keep your RM informed of your enrollment for a training. For Contract To Hire employees, once enrolled for a training, the request goes to Reporting Manager\u2019s (RM) inbox on Workday, which needs to be approved by the RM.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 387,
            question:
              "At the time of enrollment, if the class is full / reached maximum participants limit, what will happen to my enrollment?",
            answer:
              "If the class has reached the maximum participant limit, then your name will automatically move to waitlist. If a participant drops from the course, then the waitlisted participant/s will be moved to the enrolled list based on their waitlist sequence. The class size is mentioned against each training in the Talent Development Calendar.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 388,
            question:
              "What will happen if I enroll for a training and do not attend it?",
            answer:
              "If you enroll and don\u2019t attend the training, then this will lead to non-utilization of a seat, which another employee could\u2019ve attended. This is called a no-show. And there will be a notification sent to you and your RM on the same. We recommend that you attend the training, you have enrolled for. In case of any reasons, you are unable to attend the training, please follow the \u2018drop enrollment\u2019 process. So that we can ensure optimum seat utilization.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 389,
            question:
              "Is there a provision for taking up certification apart from the Talent Development calendar?",
            answer:
              "Yes, there is a provision for taking up certification relevant to the employee\u2019s work area, there is a policy for the same on CFM portal.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 390,
            question:
              "Where can I find the Training & Certification Reimbursement policy?",
            answer:
              "Please refer to the policy on CFM Portal, click on \u2018policies\u2019, click on the \u2018Training & Certification Reimbursement Policy\u2019 for information.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 114,
    categoryName: "Employment Confirmation",
    parentCategory: 0,
    categoryDescription: "Employment Confirmation Process",
    icon: "ConfirmationNumber",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 115,
        categoryName: "Employment Confirmation Process",
        parentCategory: 114,
        categoryDescription: "Employment Confirmation Process",
        icon: null,
        questionsAndAnswers: [
          {
            id: 391,
            question: "What is the probation period in MassMutual India?",
            answer:
              "The probation period is of 180 days(6 months) from the date of joining.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 392,
            question:
              "I worked in MassMutual India as Contingent worker/Intern for more than 6 months and was recently converted to Full Time Employee. Is Probation still applicable to me?",
            answer:
              "The probation of 180 days(6 months) from the date of joining is mandatory for all employees.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 393,
            question:
              "I have completed 6 months of probation period. When will I get the confirmation letter?",
            answer:
              "Empoyee's reporting manager will provide employee's assesment feedback on Workday. Based on which HR Operations will release the confirmation letter. In case of any questions, please sendan email to mmgbsiindia@massmutual.com.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 394,
            question:
              "My probation period is extended to 2 months, will I get confirmation letter post the completion of extemded probation period?",
            answer:
              "Employee's reporting manager will provide the assesment feedback on performance during the extended period of probation. Based on satisfactory performance, HR Operations team will issue the employment confirmation letter.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 395,
            question: "Will I receive the confirmation letter on email ?",
            answer:
              "Confirmation letter will be issued on Workday and you will receive a notification on Workday for the same. Employees will be able to see the confirmation letter on Workday under Personal documents.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 399,
            question:
              "I am unable to view task on Workday to initiate probation review of my team member, how do I provide the feedback?",
            answer:
              "Managers will get an alert from Workday 15 days prior to the completion of probation. Managers can also initiate verification by accessing team member profile on Workday -> Action-> Job Change -> Manage Probation period->Start Review.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 116,
        categoryName: "Probation Extension",
        parentCategory: 114,
        categoryDescription: "Probation Extension",
        icon: null,
        questionsAndAnswers: [
          {
            id: 396,
            question:
              "Do I need to sign the probabation extension letter and send it to HR team ?",
            answer:
              "Extension letter will be issued on Workday, you will receive a notification on Workday for the same.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 397,
            question: "Is there any possibility to extend probation?",
            answer:
              "Employee's manager will assess the performance, provide feedback on Workday for confirmation or extension of probation.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 398,
            question: "What is the maximum probation extension period?",
            answer: "Probation can be extend to 1- 3 months.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 117,
    categoryName: "Absence Management",
    parentCategory: 0,
    categoryDescription: "Managing leaves and absences in Workday",
    icon: "ManageAccounts",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 118,
        categoryName: "Bereavement leave",
        parentCategory: 117,
        categoryDescription: "Bereavement leave",
        icon: null,
        questionsAndAnswers: [
          {
            id: 414,
            question: "What is bereavement leave?",
            answer:
              "Employee can avail the Bereavement leave in case of death of an immediate family member (parents, spouse, children, siblings, parents-in-law and grandparents).",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 415,
            question: "How many days can we avail on bereavement?",
            answer:
              "Employees would be eligible for up to five [5] working days (continuous) of paid leave.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 119,
        categoryName: "Compensatory off",
        parentCategory: 117,
        categoryDescription: "Compensatory off",
        icon: null,
        questionsAndAnswers: [
          {
            id: 430,
            question: "Who are eligible for Comp Off?",
            answer:
              "Employees working on a weekend / holiday would be eligible to avail compensatory off and it needs to be approved by the manager.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 431,
            question: "Can I avail comp off after whenever required?",
            answer:
              "Compensatory offs must be availed within ninety [90] calendar days and cannot be carried forward or encashed.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 432,
            question: "How to apply for Compensatory Off?",
            answer:
              "Employee's need to submit time entry with comp off request on Weekoff. Post approval of time entry by the manager, the compoff balance will be added to employee leave balance.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 433,
            question:
              "I missed to utilize compoff within 90 days. MyComp Off balance has lapsed. Shall I get additional Comp Off balance?",
            answer:
              "Compoff has to be availed within 90 days of working. There is no exception or additonal balance that will be added if compensatory off is not utilized.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 120,
        categoryName: "Extended leave",
        parentCategory: 117,
        categoryDescription: "Extended leave",
        icon: null,
        questionsAndAnswers: [
          {
            id: 423,
            question: "When can I apply for extended leave?",
            answer:
              "Extended leaves beyond 90 days will be considered for loss of pay. To avail extended leave benefit, an employee should have served at the MassMutual India for a minimum of two [2] years in current employment.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 424,
            question:
              "When employee is on extended leave are they eligible for health insurance?",
            answer:
              "Yes,the employee continues to be covered under MassMutual India \u2019s Insurance Policy during the extended leave period.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 425,
            question:
              "What could be possible scenarios to avail extended leave?",
            answer:
              "Extended leave can be availed for personal reasons like parental leave, sickness, higher education, travel with spouse to onsite (overseas) locations. Employee needs to contact HRBP and Manager to avail extended leave.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 426,
            question:
              "Is every one eligible for this extended leave irrespetive of their date of joining?",
            answer:
              "One has to complete two years of service in current employment to avail extended leaves.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 121,
        categoryName: "Flexible Holidays",
        parentCategory: 117,
        categoryDescription: "Flexible Holidays",
        icon: null,
        questionsAndAnswers: [
          {
            id: 434,
            question: "How many flexible holidays can be availed in a year?",
            answer:
              "Employees are eligible for a total of Ten (10) national and festival holidays in a calendar year.Out of which 04 / 05 are mandatory holidays as per the [Telangana] Factories and Establishments (National, Festival and other Holidays) Act, 1974. The remaining 06 / 05 holidays are optional and can be chosen from a basket of flexible holidays.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 435,
            question: "Can I apply flexibe holiday?",
            answer:
              "Flexible holidays are to be applied 01 month prior to the holiday date on HRIS with approval from the manager.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 122,
        categoryName: "Floating Holidays",
        parentCategory: 117,
        categoryDescription: "Floating Holidays",
        icon: null,
        questionsAndAnswers: [
          {
            id: 419,
            question: "How many Floating holidays in a year?",
            answer:
              "Employees are provided (01) day off as floating holiday to celebrate either their birthday or wedding anniversary during the calendar year",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 420,
            question:
              "I am unable to apply for Floating holiday on my Marriage Anniversary, what is the reason?",
            answer:
              "Employees need to update the Martital status and Marriage anniversary on Workday. Post updation of details, employees will be eligibale to avail or apply for Floating holiday on Marriage anniversay.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 421,
            question:
              "My actual date of birth differs from certificate date, shall I apply for floating holiday on my actual birth date?",
            answer:
              "Please contact MMGBSI HR team (mmgbsiindia@massmutual.com) to apply for floating holiday on actual date of birth.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 422,
            question:
              "If birthday or marriage anniversary falls on weekends shall i be eligible to apply floating holiday?",
            answer:
              "If employee\u2019s birthday or wedding anniversary falls on a weekend / holiday, he / she would not be eligible to avail the floating holiday.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 123,
        categoryName: "Loss of Pay(LOP)",
        parentCategory: 117,
        categoryDescription: "Loss of Pay(LOP)",
        icon: null,
        questionsAndAnswers: [
          {
            id: 436,
            question: "What is LOP?",
            answer:
              "LOP is Loss of Pay. Employee can opt for LOP (Loss of pay) only when all the annual leaves and other eligible leaves have exhuasted.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 437,
            question: "Will my PF be deducted in LOP?",
            answer:
              "Its depends on the number of days you have applied for LOP.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 124,
        categoryName: "Maternity leave",
        parentCategory: 117,
        categoryDescription: "Maternity leave",
        icon: null,
        questionsAndAnswers: [
          {
            id: 400,
            question:
              "When can i avail the maternity leave and what is the process to apply?",
            answer:
              "Maternity Leave can commence on any date up to eight [8] weeks prior to the expected date of childbirth and would conclude after the total period of twenty-six [26] continuous weeks from the date of commencement of leave. Employee need to apply for Maternity Leave on Workday by uploading medical document which states estimated date of delivery.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 401,
            question: "How many days an employee can avail maternity leave?",
            answer:
              "You can avail 26 continuous weeks of paid maternity leave for the fisrt 2 instances of childbirth",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 402,
            question: "What type of documents do I need to submit for ML?",
            answer:
              "Need to submit medical certificate from the Doctor on confirming the maternity with estimated date of delivery.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 403,
            question:
              "Along with the medical certificate are there any forms that needs to be submitted?",
            answer: "Only medical certificate issued by Doctor will suffice.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 404,
            question: "When do we receive Maternity Bonus ?",
            answer:
              "Employees would be eligible for a Maternity Bonus of INR 3,500 (one-time payment) for each instance of childbirth. Employee should share the dischrge summary over an email to HR department ( mmgbsipayroll@massmutual.com). Maternity Bonus will be processed based on reciept of details as per payroll cutoff date.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 405,
            question:
              "Is there a provision to extend maternity leaves for employees?",
            answer:
              "Maternity Leave is enabled as per ML act. However, employees opting for an extension of leave are allowed to avail their Paid Time Offs with approval from Manager.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 125,
        categoryName: "Paid time off",
        parentCategory: 117,
        categoryDescription: "Paid time off",
        icon: null,
        questionsAndAnswers: [
          {
            id: 416,
            question:
              "How many leaves under Paid Time Off will be accumulated in a calendar year?",
            answer:
              "Employees are eligible for twenty-five [25] days paid time off in a calendar year.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 417,
            question: "When will PaId Time offs can be encashed?",
            answer:
              "Paid Time Off of max of 60 leaves can be carried forward to the next year. Leave balance below 60 will be carried forward to the following year by default. Leaves in excess of 60 days will be encashed (on basic salary) at the beginning of the following year. Employees who are separating from organization, their Paid Time Off will be encashed in Full and Final Settelment on prorated basis.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 418,
            question: "What is the calculation for Paid Time Off Encashment?",
            answer: "(Monthly Basic Salary/30)*Paid Time off balance",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 126,
        categoryName: "Paternity leave",
        parentCategory: 117,
        categoryDescription: "Paternity leave",
        icon: null,
        questionsAndAnswers: [
          {
            id: 406,
            question: "What is paternity leave ?",
            answer:
              "Paternity Leave is applicable to all married male employees in Massmutual India who have been on the payroll of the company for at least 80 calendar days, excluding 'Loss of Pay' days.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 407,
            question:
              "I have joined MassMutual India recently. I am blessed with a baby girl, can I avail paternity now?",
            answer:
              "Employees are allowed to avail Paternity Leave, only if the baby is born after employee's start date. And also, employee should be in payroll for atleast 80 calendar days.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 408,
            question: "How many leave can be utilized on paternity?",
            answer:
              "Employees would be eligible for up to 3 weeks of Paternity Leave ( 15 working days)",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 409,
            question:
              "Do we need to submit any document to avail Paternity Leave?",
            answer:
              "Employee's need to upload the birth certificate/discharge summary provided by hospitals while applying paternity leave on work day.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 410,
            question: "Is there any time line to avail Patenity Leave ?",
            answer:
              "Paternity Leave must start within thirty [30] calendar days from the date of childbirth/ adoption date of child, less than 3 months of age and should be availed within ninety (90) calendar days. Paternity leave can be taken on a continuous or intermittent basis.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 411,
            question:
              "I see two different categories to apply for Paternity Leave? Which leave has to be applied?",
            answer:
              "Employees are requested to apply for Paternity leave for continuous Paternity Leave , then Paternity intermittant time off if would like to avail leaves in breaks with in 90 days of child birth.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 127,
        categoryName: "Relocation leave",
        parentCategory: 117,
        categoryDescription: "Relocation leave",
        icon: null,
        questionsAndAnswers: [
          {
            id: 427,
            question: "Who are eligible for this relocation leave?",
            answer:
              "Employees (new hires or transfers), who are relocating from another city can avail benefits as per the Relocation Benefits policy that gramts two days of leave to help them settle in the new location.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 428,
            question: "Is there any timeline to avail this relocation leave?",
            answer:
              "Relocation leave needs to be availed within 30 days of joining.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 429,
            question:
              "Any kind of approval is required to avail relocation leave?",
            answer:
              "New hires should ensure they have prior approvals from the Talent Acquisition team before availing relocation leave.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 128,
        categoryName: "Sick leave",
        parentCategory: 117,
        categoryDescription: "Sick leave",
        icon: null,
        questionsAndAnswers: [
          {
            id: 412,
            question: "How many sick leaves will be accumulated in a year?",
            answer:
              "Employees are eligible for five [5] days of sick leave in a calendar year along with their Paid time off",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 413,
            question: "What if i am on sick leave for more that 3 days?",
            answer:
              "Employees are required to submit medical certificate while submitting Sick leave request on Workday.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
  {
    categoryId: 129,
    categoryName: "EPFO",
    parentCategory: 0,
    categoryDescription: "Employee Provident Fund",
    icon: "Settings",
    questionsAndAnswers: [],
    subcategories: [
      {
        categoryId: 130,
        categoryName: "PF Transfer",
        parentCategory: 129,
        categoryDescription: "PF Transfer",
        icon: null,
        questionsAndAnswers: [
          {
            id: 442,
            question: "How to initiate the EPFO transfer request?",
            answer:
              "Please login to EPFO member portal with your credentails & once login to portal you will find online services tab. Under that tab you will find one member-one epf account.Please select the tab to initiate the transfer request.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 443,
            question:
              "How to initiate if date of exit is not updated from previous employer?",
            answer:
              "Its mandatory to update DOE by your previous employer if not you cannot initiate the transfer request. Please reach your previous employer to update date of exit.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 444,
            question: "What is Annexure-k?",
            answer:
              "Annexure- k is employees's PF and Pension summary, generally Trust Organizations will provide the same to employees.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 445,
            question:
              "My PF transfer was rejected and I was informed to sumbit Annexure-K.",
            answer: "Please contact your previous employer for Annexure-K.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 446,
            question:
              "My PF transfer was rejected stating that I am not eligible for pension. However, its getting deducted from the current employer or previous employer. How can I rectify the issue?",
            answer:
              "Employee is required to submit statutory form Form 11 with appropriate details. New joiners are required check EPFO passbooks and check for the pension contribution in the last column of the passbook to update Form 11. MassMutual India HR team will consider EPS deduction in payroll as per Form 11. Please send a mail with with a request for correction to mmgbsipayroll@massmutual.com.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 447,
            question: "How to check EPS deduction from Trust Organizations?",
            answer:
              "For Trust organizations you cannot view the passbook. You need to check with your employer/HR team on your pension contibutions.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 131,
        categoryName: "PF Withdrawal",
        parentCategory: 129,
        categoryDescription: "PF Withdrawal",
        icon: null,
        questionsAndAnswers: [
          {
            id: 448,
            question: "Can I initiate for EPFO partial withdrawl?",
            answer:
              "Yes you can go for partial withdrawl,based on your tenure and you can go through the details on UAN member portal.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 449,
            question:
              "I completed 10 years of service. Can I go for complete withdrawl for both PF and Pension?",
            answer:
              "Yes, you can withdraw PF, but pension you will receive at the age of 58.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 450,
            question:
              "I completed 5 years of service and I am not working anywhere. Can I go for complete withdrawl?",
            answer:
              "Yes you can initiate complete withdrawl on PF and Pension.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 132,
        categoryName: "Profile Correction",
        parentCategory: 129,
        categoryDescription: "Profile Correction",
        icon: null,
        questionsAndAnswers: [
          {
            id: 438,
            question:
              "What is the process to change personal information in EPFO?",
            answer:
              "To change personal information, based on the change request employee needs to submit all the documents to employer by mailing to mmgbsipayroll@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 439,
            question: "How to correct the DOJ and DOE in EPFO records?",
            answer:
              "Employee has to share relieving letter,experience certificate and full and final settlements, offer letter for corrections by sending a mail requesting mmgbsipayroll@massmutual.com",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
          {
            id: 441,
            question:
              "My mobile number has changed. How to register my new mobile number in EPFO?",
            answer:
              "Click forgot password option in UAN member portal and it will ask for mobile number authentication where you have the option to change the mobile number.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
      {
        categoryId: 133,
        categoryName: "UAN Activation",
        parentCategory: 129,
        categoryDescription: "UAN Activation",
        icon: null,
        questionsAndAnswers: [
          {
            id: 440,
            question: "My UAN is not activated,how to activate it?",
            answer:
              "To activate UAN, your name should be same as per Aadhaar in the EPFO records, if its not matching you need to initiate the change request.",
            yesCount: 0,
            noCount: 0,
            link: null,
          },
        ],
        subcategories: [],
      },
    ],
  },
];
