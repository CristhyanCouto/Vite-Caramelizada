import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface PostProducersProps {
  setRefreshComponentCounter?: () => void;
}

export default function PostProducers({ setRefreshComponentCounter }: PostProducersProps) {

  const validationSchema = Yup.object({
    name_producer: Yup.string().required("First Name is required"),
    headquarters_en: Yup.string(),
    headquarters_pt: Yup.string(),
    about_producer_en: Yup.string(),
    about_producer_pt: Yup.string(),
    producer_image_url: Yup.string().required("Producer Image URL is required"),
  });

  const initialValues = {
    name_producer: "",
    headquarters_en: "",
    headquarters_pt: "",
    about_producer_en: "",
    about_producer_pt: "",
    producer_image_url: "",
  };

  interface FormValues {
    name_producer: string | null;
    headquarters_en: string | null;
    headquarters_pt: string | null;
    about_producer_en: string | null;
    about_producer_pt: string | null;
    producer_image_url: string | null;
  }

  const transformEmptyStringsToNull = (values: FormValues) => {
    const transformedValues = { ...values };
    for (const key in transformedValues) {
      if (transformedValues[key as keyof FormValues] === "") {
        transformedValues[key as keyof FormValues] = null;
      }
    }
    return transformedValues;
  };

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const transformedValues = transformEmptyStringsToNull(values);
    axios
      .post("http://localhost:3001/producers", transformedValues)
      .then(() => {
        if (setRefreshComponentCounter) {
          setRefreshComponentCounter();
        }
        resetForm();
        alert("Producer posted successfully");
      });
  };

  return (
    <div className="grid">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2">
          Post Producers
        </h1>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="grid grid-cols-1 p-10 border">
            <label htmlFor="name_producer">Name Producer *</label>
            <Field
              className="border"
              autoComplete="off"
              id="name_producer"
              name="name_producer"
              placeholder="Abc"
            />
            <ErrorMessage name="name_producer" component="div" />

            <label htmlFor="headquarters_en">Headquarters EN</label>
            <Field
              className="border"
              autoComplete="off"
              id="headquarters_en"
              name="headquarters_en"
              placeholder="Abc"
            />
            <ErrorMessage name="headquarters_en" component="div" />

            <label htmlFor="headquarters_pt">Headquarters PT</label>
            <Field
              className="border"
              autoComplete="off"
              id="headquarters_pt"
              name="headquarters_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="headquarters_pt" component="div" />

            <label htmlFor="about_producer_en">About Producer En ?</label>
            <Field
              className="border"
              autoComplete="off"
              id="about_producer_en"
              name="about_producer_en"
              placeholder="Abc"
            />
            <ErrorMessage name="about_producer_en" component="div" />

            <label htmlFor="about_producer_pt">About Producer Pt ?</label>
            <Field
              className="border"
              autoComplete="off"
              id="about_producer_pt"
              name="about_producer_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="about_producer_pt" component="div" />

            <label htmlFor="producer_image_url">
              Producer Image URL * 400x600 PostImage
            </label>
            <Field
              className="border"
              autoComplete="off"
              id="producer_image_url"
              name="producer_image_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage name="producer_image_url" component="div" />

            <div className="flex justify-center mt-4">
              <button
                className="border w-[20%] rounded-sm bg-zinc-300 hover:bg-zinc-200"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
