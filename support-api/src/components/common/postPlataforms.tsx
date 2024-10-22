import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DatePickerForm } from "./datePickerForm";
import { useState } from "react";

interface PlataformsGamesProps {
  setRefreshComponentCounter?: () => void;
}

export default function PostPlataforms({
  setRefreshComponentCounter,
}: PlataformsGamesProps) {

    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [releaseDate, setReleaseDate] = useState('');
    
  const validationSchema = Yup.object({
    name_plataform: Yup.string().required("First Name is required"),
    release_date: Yup.date(),
  });

  const initialValues = {
    name_plataform: "",
    release_date: "",
  };

  interface FormValues {
    name_plataform: string | null;
    release_date: string | null;
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
      .post("http://localhost:3001/plataforms", transformedValues)
      .then(() => {
        if (setRefreshComponentCounter) {
          setRefreshComponentCounter();
        }
        resetForm();
        alert("Plataform posted successfully");
      });
  };

  return (
    <div className="grid">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2">
          Post Plataforms
        </h1>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="grid grid-cols-1 p-10 border">
            <label htmlFor="name_plataform">Name Plataform *</label>
            <Field
              className="border"
              autoComplete="off"
              id="name_plataform"
              name="name_plataform"
              placeholder="Abc"
            />
            <ErrorMessage name="name_plataform" component="div" />

            <label htmlFor="release_date">Release Date ?</label>
            <div className="flex flex-row items-center mb-2">
              <input
                name="inputBirth"
                className="border h-10 rounded-sm mr-2"
                type="text"
                placeholder="Year"
                onChange={(e) => setYear(Number(e.target.value))}
              />
              <DatePickerForm
                year={year}
                onDateChange={(formattedDate) =>
                  setReleaseDate(formattedDate)
                }
              />
            </div>
            <Field
              as="select"
              className="border"
              autoComplete="off"
              id="release_date"
              name="release_date"
              placeholder="00/00/0000"
            >
              <option value="00/00/0000">Select an Option</option>
              <option value={releaseDate}>{releaseDate}</option>
            </Field>
            <ErrorMessage name="release_date" component="div" />

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
