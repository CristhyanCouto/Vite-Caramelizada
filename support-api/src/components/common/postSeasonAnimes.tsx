import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { DatePickerForm } from "./datePickerForm";

interface PostSeasonAnimesCardProps {
  setRefreshComponentCounter?: () => void;
}

export default function PostSeasonAnimes({
  setRefreshComponentCounter,
}: PostSeasonAnimesCardProps) {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [dateOfRelease, setDateOfRelease] = useState<string>("");
  // const [search, setSearch] = useState<string>("");

  const validationSchema = Yup.object({
    title_en: Yup.string().required("Title EN is required"),
    title_pt: Yup.string().required("Title PT is required"),
    release_date: Yup.date().nullable(),
    episodes_count_animes: Yup.number().nullable(),
    runtime: Yup.string()
      .matches(
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
        "Formato de tempo inválido (HH:mm:ss)"
      )
      .nullable(),
    about_season_en: Yup.string().nullable(),
    about_season_pt: Yup.string().nullable(),
    cover_season_url: Yup.string().required("Cover Movie URL is required"),
    trailer_season_url: Yup.string().required("Trailer Movie URL is required"),
    image_season_url01: Yup.string().nullable(),
    image_season_url02: Yup.string().nullable(),
    image_season_url03: Yup.string().nullable(),
    image_season_url04: Yup.string().nullable(),
    image_season_url05: Yup.string().nullable(),
    image_season_url06: Yup.string().nullable(),
    image_season_url07: Yup.string().nullable(),
    image_season_url08: Yup.string().nullable(),
    image_season_url09: Yup.string().nullable(),
    image_season_url10: Yup.string().nullable(),
    my_rating: Yup.number().nullable(),
    my_review_en: Yup.string().nullable(),
    my_review_pt: Yup.string().nullable(),
  });

  const initialValues = {
    title_en: "",
    title_pt: "",
    release_date: "",
    episodes_count_animes: null,
    runtime: "",
    about_season_en: "",
    about_season_pt: "",
    cover_season_url: "",
    trailer_season_url: "",
    image_season_url01: "",
    image_season_url02: "",
    image_season_url03: "",
    image_season_url04: "",
    image_season_url05: "",
    image_season_url06: "",
    image_season_url07: "",
    image_season_url08: "",
    image_season_url09: "",
    image_season_url10: "",
    my_rating: null,
    my_review_en: "",
    my_review_pt: "",
  };

  interface FormValues {
    title_en: string | null;
    title_pt: string | null;
    release_date: string | null;
    episodes_count_animes: number | null;
    runtime: string | null;
    about_season_en: string | null;
    about_season_pt: string | null;
    cover_season_url: string | null;
    trailer_season_url: string | null;
    image_season_url01: string | null;
    image_season_url02: string | null;
    image_season_url03: string | null;
    image_season_url04: string | null;
    image_season_url05: string | null;
    image_season_url06: string | null;
    image_season_url07: string | null;
    image_season_url08: string | null;
    image_season_url09: string | null;
    image_season_url10: string | null;
    my_rating: number | null;
    my_review_en: string | null;
    my_review_pt: string | null;
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
      .post("http://localhost:3001/seasonsAnimes", transformedValues)
      .then(() => {
        if (setRefreshComponentCounter) {
          setRefreshComponentCounter();
        }
        resetForm();
        alert("Season posted successfully");
      });
  };

  return (
    <div className="grid w-full">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2 mb-5 text-white font-bold">
          Post Season Anime
        </h1>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="grid grid-cols-1 p-10 border bg-white rounded-xl">
            <h2 className="text-4xl font-bold my-2">Title</h2>
            <label htmlFor="title_en" className="font-bold">
              Title EN *
            </label>
            <Field
              className="border w-full text-green-500 my-1"
              autoComplete="off"
              id="title_en"
              name="title_en"
              placeholder="Abc"
            />
            <ErrorMessage
              name="title_en"
              className="text-red-500"
              component="div"
            />

            <label htmlFor="title_pt" className="font-bold">
              Title PT *
            </label>
            <Field
              className="border w-full text-green-500 my-1"
              autoComplete="off"
              id="title_pt"
              name="title_pt"
              placeholder="Abc"
            />
            <ErrorMessage
              name="title_pt"
              className="text-red-500"
              component="div"
            />

            {/*--------------------------- Release Date ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Release Date</h2>
            <label htmlFor="release_date" className="font-bold mb-1">
              Release Date ?
            </label>
            <div className="flex flex-row items-center mb-2">
              <input
                name="inputReleaseDate"
                className="border h-10 rounded-sm mr-2 text-green-500"
                type="text"
                autoComplete="off"
                placeholder="Year"
                onChange={(e) => setYear(Number(e.target.value))}
              />
              <DatePickerForm
                year={year}
                onDateChange={(formattedDate) =>
                  setDateOfRelease(formattedDate)
                }
              />
            </div>
            <Field
              as="select"
              className="border w-full text-green-500"
              autoComplete="off"
              id="release_date"
              name="release_date"
              placeholder="00/00/0000"
            >
              <option value="00/00/0000">Select an Option</option>
              <option value={dateOfRelease}>{dateOfRelease}</option>
            </Field>
            <ErrorMessage name="release_date" component="div" />

            {/*--------------------------- Episodes Count ----------------------------------- */}
            <h2 className="text-4xl font-bold my-2">Episodes Count</h2>
            <label htmlFor="episodes_count_animes" className="font-bold">
              Episodes Count
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="episodes_count_animes"
              name="episodes_count_animes"
              placeholder="0"
            />
            <ErrorMessage
              name="episodes_count_animes"
              className="text-red-500"
              component="div"
            />

            {/*--------------------------- Runtime ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Runtime</h2>
            <label htmlFor="runtime" className="font-bold">
              Runtime
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="runtime"
              name="runtime"
              placeholder="HH:mm:ss"
            />
            <ErrorMessage name="runtime" component="div" />

            {/*--------------------------- About Season EN ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">About Season</h2>
            <label htmlFor="about_season_en" className="font-bold">
              About Season EN ?
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="about_season_en"
              name="about_season_en"
              placeholder="Abc"
            />
            <ErrorMessage name="about_season_en" component="div" />

            {/*--------------------------- About Season PT ----------------------------------- */}

            <label htmlFor="about_season_pt" className="font-bold">
              About Season PT
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="about_season_pt"
              name="about_season_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="about_season_pt" component="div" />

            {/*--------------------------- Cover Season URL ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Season Cover URL</h2>
            <label htmlFor="cover_season_url" className="font-bold">
              Cover Season URL *
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="cover_season_url"
              name="cover_season_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage
              name="cover_season_url"
              className="text-red-500"
              component="div"
            />

            {/*--------------------------- Trailer Season URL ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Season Trailer URL</h2>
            <label htmlFor="trailer_season_url" className="font-bold">
              Trailer Season URL *
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="trailer_season_url"
              name="trailer_season_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage
              name="trailer_season_url"
              className="text-red-500"
              component="div"
            />

            {/*--------------------------- Image Season URL ----------------------------------- */}
            <h2 className="text-4xl font-bold my-2">Season Prints</h2>
            {[...Array(10)].map((_, index) => {
              const imageIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`image_season_url${imageIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`image_season_url${imageIndex}`}
                  >
                    Image Season URL {imageIndex}
                  </label>
                  <Field
                    className="border ml-2 my-1"
                    autoComplete="off"
                    id={`image_season_url${imageIndex}`}
                    name={`image_season_url${imageIndex}`}
                    placeholder="https://exemple.com"
                  />
                  <ErrorMessage
                    name={`image_season_url${imageIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- My Rating ----------------------------------- */}
            <h2 className="text-4xl font-bold my-2">My Rating</h2>
            <label htmlFor="my_rating" className="font-bold">
              My Rating
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="my_rating"
              name="my_rating"
              placeholder="0.0"
            />
            <ErrorMessage name="my_rating" component="div" />

            {/*--------------------------- My Review EN ----------------------------------- */}
            <h2 className="text-4xl font-bold my-2">My Review</h2>
            <label htmlFor="my_review_en" className="font-bold">
              My Review EN
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="my_review_en"
              name="my_review_en"
              placeholder="Abc"
            />
            <ErrorMessage name="my_review_en" component="div" />

            {/*--------------------------- My Review PT ----------------------------------- */}
            <label htmlFor="my_review_pt" className="font-bold">
              My Review PT
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="my_review_pt"
              name="my_review_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="my_review_pt" component="div" />

            {/*--------------------------- Submit Button ----------------------------------- */}

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
