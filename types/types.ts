export interface IMealFormData {
  slug: string;
  title: FormDataEntryValue | null;
  summary: FormDataEntryValue | null;
  instructions: FormDataEntryValue | null;
  image: FormDataEntryValue | null;
  creator: FormDataEntryValue | null;
  creator_email: FormDataEntryValue | null;
}

export interface IMealResponse {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}
