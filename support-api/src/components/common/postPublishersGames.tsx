import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface PostPublishersGamesProps {
  setRefreshComponentCounter?: () => void;
}

export default function PostPublishersGames({ setRefreshComponentCounter }: PostPublishersGamesProps) {

  const validationSchema = Yup.object({
    name_publisher_games: Yup.string().required("First Name is required"),
    headquarters_en: Yup.string(),
    headquarters_pt: Yup.string(),
    about_publisher_games_en: Yup.string(),
    about_publisher_games_pt: Yup.string(),
    publisher_games_image_url: Yup.string().required("Publisher Image URL is required"),
  });

  const initialValues = {
    name_publisher_games: "",
    headquarters_en: "",
    headquarters_pt: "",
    about_publisher_games_en: "",
    about_publisher_games_pt: "",
    publisher_games_image_url: "",
  };

  interface FormValues {
    name_publisher_games: string | null;
    headquarters_en: string | null;
    headquarters_pt: string | null;
    about_publisher_games_en: string | null;
    about_publisher_games_pt: string | null;
    publisher_games_image_url: string | null;
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
      .post("http://localhost:3001/publisherGames", transformedValues)
      .then(() => {
        if (setRefreshComponentCounter) {
          setRefreshComponentCounter();
        }
        resetForm();
        alert("Publisher posted successfully");
      });
  };

  return (
    <div className="grid">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2">
          Post Publishers Games
        </h1>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="grid grid-cols-1 p-10 border">
            <label htmlFor="name_publisher_games">Name Publisher *</label>
            <Field
              className="border"
              autoComplete="off"
              id="name_publisher_games"
              name="name_publisher_games"
              placeholder="Abc"
            />
            <ErrorMessage name="name_publisher_games" component="div" />

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

            <label htmlFor="about_publisher_games_en">About Publisher En ?</label>
            <Field
              className="border"
              autoComplete="off"
              id="about_publisher_games_en"
              name="about_publisher_games_en"
              placeholder="Abc"
            />
            <ErrorMessage name="about_publisher_games_en" component="div" />

            <label htmlFor="about_publisher_games_pt">About Publisher Pt ?</label>
            <Field
              className="border"
              autoComplete="off"
              id="about_publisher_games_pt"
              name="about_publisher_games_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="about_publisher_games_pt" component="div" />

            <label htmlFor="publisher_games_image_url">
              Publisher Image URL * 400x600 PostImage
            </label>
            <Field
              className="border"
              autoComplete="off"
              id="publisher_games_image_url"
              name="publisher_games_image_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage name="publisher_games_image_url" component="div" />

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
