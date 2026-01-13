export type Column = { name: string; type: string; nullable: boolean };
export type Table = { name: string; columns: Column[] };
export type Schema = { label: string; tables: Table[] };

export const HOST_SCHEMAS: Schema[] = [
  {
    label: "Host Core Banking (sample)",
    tables: [
      {
        name: "public.customers",
        columns: [
          { name: "customer_id", type: "uuid", nullable: false },
          { name: "full_name", type: "text", nullable: false },
          { name: "email", type: "text", nullable: true },
          { name: "phone_number", type: "text", nullable: true },
          { name: "date_of_birth", type: "date", nullable: true },
          { name: "created_at", type: "timestamp", nullable: false },
        ],
      },
      {
        name: "public.accounts",
        columns: [
          { name: "account_id", type: "uuid", nullable: false },
          { name: "customer_id", type: "uuid", nullable: false },
          { name: "account_number", type: "text", nullable: false },
          { name: "account_type", type: "text", nullable: false },
          { name: "status", type: "text", nullable: false },
          { name: "opened_at", type: "timestamp", nullable: false },
        ],
      },
      {
        name: "public.transactions",
        columns: [
          { name: "transaction_id", type: "uuid", nullable: false },
          { name: "account_id", type: "uuid", nullable: false },
          { name: "amount", type: "numeric", nullable: false },
          { name: "currency", type: "text", nullable: false },
          { name: "merchant_name", type: "text", nullable: true },
          { name: "posted_at", type: "timestamp", nullable: false },
        ],
      },
    ],
  },
];

export const ACQUIRED_SCHEMAS: Schema[] = [
  {
    label: "Acquired CRM (sample)",
    tables: [
      {
        name: "crm.client",
        columns: [
          { name: "client_id", type: "uuid", nullable: false },
          { name: "name", type: "text", nullable: false },
          { name: "email_address", type: "text", nullable: true },
          { name: "mobile_phone", type: "text", nullable: true },
          { name: "dob", type: "date", nullable: true },
          { name: "created_ts", type: "timestamp", nullable: false },
        ],
      },
      {
        name: "crm.account",
        columns: [
          { name: "acct_id", type: "uuid", nullable: false },
          { name: "client_id", type: "uuid", nullable: false },
          { name: "acct_number", type: "text", nullable: false },
          { name: "acct_type", type: "text", nullable: false },
          { name: "acct_status", type: "text", nullable: false },
          { name: "opened_ts", type: "timestamp", nullable: false },
        ],
      },
      {
        name: "crm.payment",
        columns: [
          { name: "payment_id", type: "uuid", nullable: false },
          { name: "acct_id", type: "uuid", nullable: false },
          { name: "payment_amount", type: "numeric", nullable: false },
          { name: "payment_currency", type: "text", nullable: false },
          { name: "counterparty", type: "text", nullable: true },
          { name: "posted_ts", type: "timestamp", nullable: false },
        ],
      },
    ],
  },
];

export const HOST_EVIDENCE_TEXT = `sheet=Dictionary\trow=12\tfield=customer_id\tdefinition=Unique identifier for the customer.\nfield=full_name\tdefinition=Customer legal name.\nfield=email\tdefinition=Email address for contact.\nfield=phone_number\tdefinition=Primary phone number.\nfield=date_of_birth\tdefinition=Date of birth (YYYY-MM-DD).\nfield=account_number\tdefinition=Bank account number.\nfield=merchant_name\tdefinition=Merchant or counterparty name.\n`;

export const ACQUIRED_EVIDENCE_TEXT = `sheet=CRM Glossary\trow=4\tfield=client_id\tdefinition=Unique identifier for CRM client.\nfield=email_address\tdefinition=Primary email.\nfield=mobile_phone\tdefinition=Mobile phone.\nfield=dob\tdefinition=Date of birth.\nfield=acct_number\tdefinition=Account number.\nfield=counterparty\tdefinition=Counterparty display name.\n`;

