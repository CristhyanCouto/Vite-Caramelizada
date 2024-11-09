import { DatePickerForm } from "@/components/common/datePickerForm";
import {
  CurrentStatusPropsEn,
  CurrentStatusPropsPt,
} from "@/lib/currentStatus";
import axios from "axios";

import { Formik, Form, Field, ErrorMessage, FieldInputProps } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

interface MyFormProps {
  field: FieldInputProps<string>;
}

interface PostDirectorsProps {
  setRefreshComponentCounter?: () => void;
}


export default function PostDirectors({setRefreshComponentCounter}: PostDirectorsProps) {
  

  const [statusEn, setStatusEn] = useState<CurrentStatusPropsEn[]>([]);
  const [statusPt, setStatusPt] = useState<CurrentStatusPropsPt[]>([]);

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [dateOfBirth, setDateDateOfBirth] = useState("");
  const [dateOfDeath, setDateOfDeath] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/currentStatusEns")
      .then((response) => {
        setStatusEn(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/currentStatusPts")
      .then((response) => {
        setStatusPt(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatHeight = (value: string): string => {
    let numericValue = value.replace(/[^0-9.]/g, ""); // Remove tudo que não for número ou ponto

    // Limitar para no máximo 1 dígito antes do ponto e 2 após o ponto
    if (numericValue.includes(".")) {
      const [integer, decimal] = numericValue.split(".");
      numericValue = `${integer.slice(0, 1)}.${(decimal || "").slice(0, 2)}`;
    } else {
      numericValue = numericValue.slice(0, 1); // Limita para no máximo 1 dígito antes do ponto
    }

    return numericValue;
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    height: Yup.number()
      .typeError("Height must be a number")
      .positive("Height must be a positive number")
      .test("maxDigitsBeforeDecimal", "Height can't exceed 9.99", (value) =>
        value ? /^\d{1}(\.\d{1,2})?$/.test(value.toString()) : true
      ),
    date_of_birth: Yup.date(),
    fk_director_current_status_en: Yup.number(),
    fk_director_current_status_pt: Yup.number(),
    date_of_death: Yup.date().nullable().default(null),
    city_of_birth_en: Yup.string(),
    city_of_birth_pt: Yup.string(),
    state_of_birth_en: Yup.string(),
    state_of_birth_pt: Yup.string(),
    country_of_birth_en: Yup.string(),
    country_of_birth_pt: Yup.string(),
    about_director_en: Yup.string(),
    about_director_pt: Yup.string(),
    director_image_url: Yup.string().required("Director Image URL is required"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    height: "",
    date_of_birth: "",
    fk_director_current_status_en: "",
    fk_director_current_status_pt: "",
    date_of_death: "",
    city_of_birth_en: "",
    city_of_birth_pt: "",
    state_of_birth_en: "",
    state_of_birth_pt: "",
    country_of_birth_en: "",
    country_of_birth_pt: "",
    about_director_en: "",
    about_director_pt: "",
    director_image_url: "",
  };

  interface FormValues {
    first_name: string | null;
    last_name: string | null;
    height?: string | null;
    date_of_birth?: string | null;
    fk_director_current_status_en?: string | null;
    fk_director_current_status_pt?: string | null;
    date_of_death?: string | null;
    city_of_birth_en?: string | null;
    city_of_birth_pt?: string | null;
    state_of_birth_en?: string | null;
    state_of_birth_pt?: string | null;
    country_of_birth_en?: string | null;
    country_of_birth_pt?: string | null;
    about_director_en?: string | null;
    about_director_pt?: string | null;
    director_image_url: string | null;
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
      .post("http://localhost:3001/directors", transformedValues)
      .then(() => {
        if (setRefreshComponentCounter) {
          setRefreshComponentCounter();
        }
        resetForm();
        alert("Director posted successfully");
      });
  };

  return (
    <div className="grid">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center p-2 text-white font-bold mb-2">
          Post Directors
        </h1>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="grid grid-cols-1 p-10 border bg-white rounded-sm">
            <label htmlFor="first_name" className="font-bold">First Name *</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="first_name"
              name="first_name"
              placeholder="Abc"
            />
            <ErrorMessage name="first_name" className="font-red-500" component="div" />

            <label htmlFor="last_name" className="font-bold">Last Name *</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="last_name"
              name="last_name"
              placeholder="Abc"
            />
            <ErrorMessage name="last_name" className="font-red-500" component="div" />

            <label htmlFor="height" className="font-bold">Height ?</label>
            <Field name="height">
              {({ field }: MyFormProps) => (
                <input
                  {...field}
                  className="border w-full text-green-500 mt-2"
                  id="height"
                  autoComplete="off"
                  placeholder="0.00"
                  onChange={(e) => {
                    const formattedValue = formatHeight(e.target.value);
                    field.onChange(e); // Atualiza o valor no Formik
                    e.target.value = formattedValue; // Aplica a formatação ao campo
                  }}
                />
              )}
            </Field>
            <ErrorMessage name="height" component="div" />

            <label htmlFor="date_of_birth" className="font-bold">Date of Birth *</label>
            <div className="flex flex-row items-center mb-2">
              <input
                name="inputBirth"
                className="border h-10 rounded-sm mr-2 text-green-500"
                type="text"
                placeholder="Year"
                onChange={(e) => setYear(Number(e.target.value))}
              />
              <DatePickerForm
                year={year}
                onDateChange={(formattedDate) =>
                  setDateDateOfBirth(formattedDate)
                }
              />
            </div>
            <Field
              as="select"
              className="border w-full"
              autoComplete="off"
              id="date_of_birth"
              name="date_of_birth"
              placeholder="00/00/0000"
            >
              <option value="00/00/0000">Select an Option</option>
              <option value={dateOfBirth}>{dateOfBirth}</option>
            </Field>
            <ErrorMessage name="date_of_birth" component="div" />

            <label htmlFor="fk_director_current_status_en" className="font-bold mt-2">
              Current Status En *
            </label>
            <Field
              as="select"
              className="border w-full my-2"
              autoComplete="off"
              id="fk_director_current_status_en"
              name="fk_director_current_status_en"
            >
              <option key={1} value={0}>
                Select Option
              </option>
              {statusEn
                .filter(
                  (value) =>
                    value.idcurrent_status_en == 1 ||
                    value.idcurrent_status_en == 2
                )
                .map((status) => (
                  <option
                    key={status.idcurrent_status_en}
                    value={status.idcurrent_status_en}
                  >
                    {status.name_current_status_en}
                  </option>
                ))}
            </Field>
            <ErrorMessage name="fk_director_current_status_en" component="div" />

            <label htmlFor="fk_director_current_status_en" className="font-bold">
              Current Status Pt *
            </label>
            <Field
              as="select"
              className="border w-full my-2"
              autoComplete="off"
              id="fk_director_current_status_pt"
              name="fk_director_current_status_pt"
            >
              <option key={1} value={0}>
                Select Option
              </option>
              {statusPt
                .filter(
                  (value) =>
                    value.idcurrent_status_pt == 1 ||
                    value.idcurrent_status_pt == 2
                )
                .map((status) => (
                  <option
                    key={status.idcurrent_status_pt}
                    value={status.idcurrent_status_pt}
                  >
                    {status.name_current_status_pt}
                  </option>
                ))}
            </Field>
            <ErrorMessage name="fk_director_current_status_en" component="div" />

            <label htmlFor="date_of_death" className="font-bold mb-2">Date of Death ?</label>
            <div className="flex flex-row items-center mb-2">
              <input
                name="inputDeath"
                className="border h-10 rounded-sm mr-2 text-green-500"
                type="text"
                placeholder="Year"
                onChange={(e) => setYear(Number(e.target.value))}
              />
              <DatePickerForm
                year={year}
                onDateChange={(formattedDate) => setDateOfDeath(formattedDate)}
              />
            </div>
            <Field
              as="select"
              className="border"
              autoComplete="off"
              id="date_of_death"
              name="date_of_death"
              placeholder="00/00/0000"
            >
              <option value="">Select an Option</option>
              <option value={dateOfDeath}>{dateOfDeath}</option>
            </Field>
            <ErrorMessage name="date_of_death" component="div" />

            <label htmlFor="city_of_birth_en" className="font-bold mt-2">City of Birth En ?</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="city_of_birth_en"
              name="city_of_birth_en"
              placeholder="Abc"
            />
            <ErrorMessage name="city_of_birth_en" component="div" />

            <label htmlFor="city_of_birth_pt" className="font-bold">City of Birth Pt ?</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="city_of_birth_pt"
              name="city_of_birth_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="city_of_birth_en" component="div" />

            <label htmlFor="state_of_birth_en" className="font-bold">State of Birth En ?</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="state_of_birth_en"
              name="state_of_birth_en"
              placeholder="Abc"
            />
            <ErrorMessage name="state_of_birth_en" component="div" />

            <label htmlFor="state_of_birth_pt" className="font-bold">State of Birth Pt?</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="state_of_birth_pt"
              name="state_of_birth_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="state_of_birth_pt" component="div" />

            <label htmlFor="country_of_birth_en" className="font-bold">Country of Birth En?</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="country_of_birth_en"
              name="country_of_birth_en"
              placeholder="Abc"
            />
            <ErrorMessage name="country_of_birth_en" component="div" />

            <label htmlFor="country_of_birth_pt" className="font-bold">Country of Birth Pt?</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="country_of_birth_pt"
              name="country_of_birth_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="country_of_birth_pt" component="div" />

            <label htmlFor="about_director_en" className="font-bold">About Director En ?</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="about_director_en"
              name="about_director_en"
              placeholder="Abc"
            />
            <ErrorMessage name="about_director_en" component="div" />

            <label htmlFor="about_director_pt" className="font-bold">About Director Pt ?</label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="about_director_pt"
              name="about_director_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="about_director_pt" component="div" />

            <label htmlFor="director_image_url" className="font-bold">
              Director Image URL *
            </label>
            <Field
              className="border w-full text-green-500 my-2"
              autoComplete="off"
              id="director_image_url"
              name="director_image_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage name="director_image_url" component="div" />

            <div className="flex justify-center mt-4">
              <button
                className="border w-[20%] rounded-sm bg-green-500 hover:bg-green-200 text-white"
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
