import ActorsList from "@/components/common/actorsList";
import { DatePickerForm } from "@/components/common/datePickerForm";
import { CurrentStatusPropsEn, CurrentStatusPropsPt } from "@/lib/currentStatus";
import axios from "axios";

import { Formik, Form, Field, ErrorMessage, FieldInputProps } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

interface MyFormProps {
  field: FieldInputProps<string>;
}

export default function Actors() {

  const [statusEn, setStatusEn] = useState<CurrentStatusPropsEn[]>([]);
  const [statusPt, setStatusPt] = useState<CurrentStatusPropsPt[]>([]);

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [dateOfBirth, setDateDateOfBirth] = useState('');
  const [dateOfDeath, setDateOfDeath] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/currentStatusEns')
      .then((response) => {
        setStatusEn(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('http://localhost:3001/currentStatusPts')
      .then((response) => {
        setStatusPt(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  , [])

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
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    height: Yup.number()
    .typeError("Height must be a number")
    .positive("Height must be a positive number")
    .test(
      "maxDigitsBeforeDecimal",
      "Height can't exceed 9.99",
      (value) => (value ? /^\d{1}(\.\d{1,2})?$/.test(value.toString()) : true)
    ),
    date_of_birth: Yup.date(),
    fk_actor_current_status_en: Yup.number(),
    fk_actor_current_status_pt: Yup.number(),
    date_of_death: Yup.date().nullable().default(null),
    city_of_birth_en: Yup.string(),
    city_of_birth_pt: Yup.string(),
    state_of_birth_en: Yup.string(),
    state_of_birth_pt: Yup.string(),
    country_of_birth_en: Yup.string(),
    country_of_birth_pt: Yup.string(),
    about_actor_en: Yup.string(),
    about_actor_pt: Yup.string(),
    actor_image_url: Yup.string().required('Actor Image URL is required')
  })

  const initialValues = {
    first_name: '',
    last_name: '',
    height: '',
    date_of_birth: '',
    fk_actor_current_status_en: '',
    fk_actor_current_status_pt: '',
    date_of_death: '',
    city_of_birth_en: '',
    city_of_birth_pt: '',
    state_of_birth_en: '',
    state_of_birth_pt: '',
    country_of_birth_en: '',
    country_of_birth_pt: '',
    about_actor_en: '',
    about_actor_pt: '',
    actor_image_url: ''
  }

  interface FormValues {
    first_name: string | null;
    last_name: string | null;
    height?: string | null;
    date_of_birth?: string | null;
    fk_actor_current_status_en?: string | null;
    fk_actor_current_status_pt?: string | null;
    date_of_death?: string | null;
    city_of_birth_en?: string | null;
    city_of_birth_pt?: string | null;
    state_of_birth_en?: string | null;
    state_of_birth_pt?: string | null;
    country_of_birth_en?: string | null;
    country_of_birth_pt?: string | null;
    about_actor_en?: string | null;
    about_actor_pt?: string | null;
    actor_image_url: string | null;
  }

  const transformEmptyStringsToNull = (values: FormValues) => {
    const transformedValues = { ...values };
    for (const key in transformedValues) {
      if (transformedValues[key as keyof FormValues] === '') {
        transformedValues[key as keyof FormValues] = null;
      }
    }
    return transformedValues;
  };

  const handleSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    const transformedValues = transformEmptyStringsToNull(values);
    axios.post('http://localhost:3001/actors', transformedValues)
      .then((response) => {
        resetForm();
        console.log(response.data);
      });
  };

  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2">Post Actor</h1>
        <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}>
          <Form className="grid grid-cols-1 p-10 border">
            <label htmlFor="first_name">First Name *</label>
            <Field
            className='border'
            autocomplete="off" id="first_name" name="first_name" placeholder="Abc" />
            <ErrorMessage name="first_name" component="div" />

            <label htmlFor="last_name">Last Name *</label>
            <Field
            className='border'
            autocomplete="off" id="last_name" name="last_name" placeholder="Abc" />
            <ErrorMessage name="last_name" component="div" />

            <label htmlFor="height">Height ?</label>
            <Field name="height">
            {({ field }: MyFormProps) => (
              <input
                {...field}
                className="border"
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

            <label htmlFor="date_of_birth">Date of Birth ?</label>
            <div className="flex flex-row items-center mb-2">
              <input className="border h-10 rounded-sm mr-2" type="text" placeholder="Year" onChange={(e) => setYear(Number(e.target.value))}/>
              <DatePickerForm year={year} onDateChange={(formattedDate) => setDateDateOfBirth(formattedDate)}/>
            </div>
            <Field
            as='select'
            className='border'
            autocomplete="off" id="date_of_birth" name="date_of_birth" placeholder="00/00/0000">
              <option value="00/00/0000">Select an Option</option>
              <option value={dateOfBirth}>{dateOfBirth}</option>
            </Field>
            <ErrorMessage name="date_of_birth" component="div" />

            <label htmlFor="fk_actor_current_status_en">Current Status En *</label>
            <Field
            as="select"
            className='border'
            autocomplete="off" id="fk_actor_current_status_en" name="fk_actor_current_status_en">
                <option key={1} value={0}>Select Option</option>
              {statusEn.filter((value) => value.idcurrent_status_en == 1 || value.idcurrent_status_en == 2).map((status) => (
                <option key={status.idcurrent_status_en} value={status.idcurrent_status_en}>{status.name_current_status_en}</option>
              ))}
            </Field>
            <ErrorMessage name="fk_actor_current_status_en" component="div" />

            <label htmlFor="fk_actor_current_status_en">Current Status Pt *</label>
            <Field
            as="select"
            className='border'
            autocomplete="off" id="fk_actor_current_status_pt" name="fk_actor_current_status_pt">
              <option key={1} value={0}>Select Option</option>
              {statusPt.filter((value) => value.idcurrent_status_pt == 1 || value.idcurrent_status_pt == 2).map((status) => (
                <option key={status.idcurrent_status_pt} value={status.idcurrent_status_pt}>{status.name_current_status_pt}</option>
              ))}
            </Field>
            <ErrorMessage name="fk_actor_current_status_en" component="div" />

            <label htmlFor="date_of_death">Date of Death ?</label>
            <div className="flex flex-row items-center mb-2">
              <input className="border h-10 rounded-sm mr-2" type="text" placeholder="Year" onChange={(e) => setYear(Number(e.target.value))}/>
              <DatePickerForm year={year} onDateChange={(formattedDate) => setDateOfDeath(formattedDate)}/>
            </div>
            <Field
            as='select'
            className='border'
            autocomplete="off" id="date_of_death" name="date_of_death" placeholder="00/00/0000">
              <option value="">Select an Option</option>
              <option value={dateOfDeath}>{dateOfDeath}</option>

            </Field>
            <ErrorMessage name="date_of_death" component="div" />

            <label htmlFor="city_of_birth_en">City of Birth En ?</label>
            <Field
            className='border'
            autocomplete="off" id="city_of_birth_en" name="city_of_birth_en" placeholder="Abc"/>
            <ErrorMessage name="city_of_birth_en" component="div" />

            <label htmlFor="city_of_birth_pt">City of Birth Pt ?</label>
            <Field 
            className='border'
            autocomplete="off" id="city_of_birth_pt" name="city_of_birth_pt" placeholder="Abc" />
            <ErrorMessage name="city_of_birth_en" component="div" />

            <label htmlFor="state_of_birth_en">State of Birth En ?</label>
            <Field 
            className='border'
            autocomplete="off" id="state_of_birth_en" name="state_of_birth_en" placeholder="Abc" />
            <ErrorMessage name="state_of_birth_en" component="div" />

            <label htmlFor="state_of_birth_pt">State of Birth Pt?</label>
            <Field 
            className='border'
            autocomplete="off" id="state_of_birth_pt" name="state_of_birth_pt" placeholder="Abc" />
            <ErrorMessage name="state_of_birth_pt" component="div" />

            <label htmlFor="country_of_birth_en">Country of Birth En?</label>
            <Field 
            className='border'
            autocomplete="off" id="country_of_birth_en" name="country_of_birth_en" placeholder="Abc" />
            <ErrorMessage name="country_of_birth_en" component="div" />

            <label htmlFor="country_of_birth_pt">Country of Birth Pt?</label>
            <Field 
            className='border'
            autocomplete="off" id="country_of_birth_pt" name="country_of_birth_pt" placeholder="Abc" />
            <ErrorMessage name="country_of_birth_pt" component="div" />

            <label htmlFor="about_actor_en">About Actor En ?</label>
            <Field 
            className='border'
            autocomplete="off" id="about_actor_en" name="about_actor_en" placeholder="Abc" />
            <ErrorMessage name="about_actor_en" component="div" />

            <label htmlFor="about_actor_pt">About Actor Pt ?</label>
            <Field
            className='border'
            autocomplete="off" id="about_actor_pt" name="about_actor_pt" placeholder="Abc" />
            <ErrorMessage name="about_actor_pt" component="div" />

            <label htmlFor="actor_image_url">Actor Image URL * 400x600 PostImage</label>
            <Field
            className='border'
            autocomplete="off" id="actor_image_url" name="actor_image_url" placeholder="https://exemple.com" />
            <ErrorMessage name="actor_image_url" component="div" />

            <div className="flex justify-center mt-4">
              <button className="border w-[20%] rounded-sm bg-zinc-300 hover:bg-zinc-200" type="submit">Submit</button>
            </div>

          </Form>


        </Formik>
      </div>
      <div className="p-4 grid grid-cols-1 gap-4 justify-center">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2">Helping Tools</h1>
        <div className="flex justify-center">
          <ActorsList />
        </div>
      </div>
    </div>
  )
}
