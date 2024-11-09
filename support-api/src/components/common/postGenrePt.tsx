import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface PlataformsGamesProps {
  setRefreshComponentCounter?: () => void;
}

export default function PostGenrePt({
  setRefreshComponentCounter,
}: PlataformsGamesProps) {
    
  const validationSchema = Yup.object({
    name_genre_pt: Yup.string().required("Name is required"),
  });

  const initialValues = {
    name_genre_pt: "",
  };

  interface FormValues {
    name_genre_pt: string | null;
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
      .post("http://localhost:3001/genrePts", transformedValues)
      .then(() => {
        if (setRefreshComponentCounter) {
          setRefreshComponentCounter();
        }
        resetForm();
        alert("Genre posted successfully");
      });
  };

  return (
    <div className="grid w-full">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2 text-white my-2">
          Post Genre Pt
        </h1>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="grid grid-cols-1 p-10 border bg-white rounded-sm">
            <label htmlFor="name_genre_pt" className="font-bold">Name Genre *</label>
            <Field
              className="border w-full text-green-500 rounded-sm p-1 my-2"
              autoComplete="off"
              id="name_genre_pt"
              name="name_genre_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="name_genre_pt" className="text-red-500" component="div" />

            <div className="flex justify-center mt-4">
              <button
                className="border w-[20%] rounded-sm bg-green-500 hover:bg-green-200"
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
