import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { DatePickerForm } from "./datePickerForm";
import {
  GenreEnCardProps,
  GenrePtCardProps,
  ProducersCardProps,
  RatedPGEnCardProps,
  RatedPGPtCardProps,
} from "@/lib/nonPersonInterfaces";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import PostProducers from "./postProducers";
import PostDirectors from "./postDirectors";
import {
  ActorCardProps,
  DirectorCardProps,
  WriterCardProps,
} from "@/lib/person";
import PostWriters from "./postWriters";
import PostActors from "./postActors";
import PostGenreEn from "./postGenreEn";
import PostGenrePt from "./postGenrePt";

interface PostMoviesProps {
  setRefreshComponentCounter?: () => void;
}

export default function PostMovies({
  setRefreshComponentCounter,
}: PostMoviesProps) {
  const [counter, setCounter] = useState<number>(0);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [dateOfRelease, setDateOfRelease] = useState<string>("");
  const [producers, setProducers] = useState<ProducersCardProps[]>([]);
  const [directors, setDirectors] = useState<DirectorCardProps[]>([]);
  const [writers, setWriters] = useState<WriterCardProps[]>([]);
  const [actors, setActors] = useState<ActorCardProps[]>([]);
  const [genreEn, setGenreEn] = useState<GenreEnCardProps[]>([]);
  const [genrePt, setGenrePt] = useState<GenrePtCardProps[]>([]);
  const [ratedPgEn, setRatedPgEn] = useState<RatedPGEnCardProps[]>([]);
  const [ratedPgPt, setRatedPgPt] = useState<RatedPGPtCardProps[]>([]);
  // const [search, setSearch] = useState<string>("");

  //Searchs by producers
  const [searchProducer, setSearchProducer] = useState<string[]>([]);
  const handleSearchProducer =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchProducer = [...searchProducer];
      newSearchProducer[index] = e.target.value;
      setSearchProducer(newSearchProducer);
    };

  //Searchs by directors
  const [searchDirector, setSearchDirector] = useState<string[]>([]);
  const handleSearchDirector =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchDirector = [...searchDirector];
      newSearchDirector[index] = e.target.value;
      setSearchDirector(newSearchDirector);
    };

  //Searchs by writers
  const [searchWriter, setSearchWriter] = useState<string[]>([]);
  const handleSearchWriter =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchWriter = [...searchWriter];
      newSearchWriter[index] = e.target.value;
      setSearchWriter(newSearchWriter);
    };

  //Searchs by actors
  const [searchActor, setSearchActor] = useState<string[]>([]);
  const handleSearchActor =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchActor = [...searchActor];
      newSearchActor[index] = e.target.value;
      setSearchActor(newSearchActor);
    };

  //Searchs by genreEn
  const [searchGenreEn, setSearchGenreEn] = useState<string[]>([]);
  const handleSearchGenreEn =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchGenreEn = [...searchGenreEn];
      newSearchGenreEn[index] = e.target.value;
      setSearchGenreEn(newSearchGenreEn);
    };

  //Searchs by genrePt
  const [searchGenrePt, setSearchGenrePt] = useState<string[]>([]);
  const handleSearchGenrePt =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchGenrePt = [...searchGenrePt];
      newSearchGenrePt[index] = e.target.value;
      setSearchGenrePt(newSearchGenrePt);
    };

  useEffect(() => {
    axios.get("http://localhost:3001/producers").then((response) => {
      setProducers(response.data);
    });
    axios.get("http://localhost:3001/directors").then((response) => {
      setDirectors(response.data);
    });
    axios.get("http://localhost:3001/writers").then((response) => {
      setWriters(response.data);
    });
    axios.get("http://localhost:3001/actors").then((response) => {
      setActors(response.data);
    });
    axios.get("http://localhost:3001/genreEns").then((response) => {
      setGenreEn(response.data);
    });
    axios.get("http://localhost:3001/genrePts").then((response) => {
      setGenrePt(response.data);
    });
    axios.get("http://localhost:3001/ratedPgEns").then((response) => {
      setRatedPgEn(response.data);
    });
    axios.get("http://localhost:3001/ratedPgPts").then((response) => {
      setRatedPgPt(response.data);
    });
  }, [counter]);

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  // };

  const handleRefresh = () => {
    setCounter((prevCounter) => prevCounter + 1); // Incrementa o contador para forçar o refresh
  };

  const validationSchema = Yup.object({
    title_en: Yup.string().required("Title EN is required"),
    title_pt: Yup.string().required("Title PT is required"),
    release_date: Yup.date().nullable(),
    fk_producer_01: Yup.number().nullable(),
    fk_producer_02: Yup.number().nullable(),
    fk_producer_03: Yup.number().nullable(),
    fk_producer_04: Yup.number().nullable(),
    fk_producer_05: Yup.number().nullable(),
    fk_director_01: Yup.number().nullable(),
    fk_director_02: Yup.number().nullable(),
    fk_director_03: Yup.number().nullable(),
    fk_director_04: Yup.number().nullable(),
    fk_director_05: Yup.number().nullable(),
    fk_writer_01: Yup.number().nullable(),
    fk_writer_02: Yup.number().nullable(),
    fk_writer_03: Yup.number().nullable(),
    fk_writer_04: Yup.number().nullable(),
    fk_writer_05: Yup.number().nullable(),
    fk_actor01: Yup.number().nullable(),
    fk_actor02: Yup.number().nullable(),
    fk_actor03: Yup.number().nullable(),
    fk_actor04: Yup.number().nullable(),
    fk_actor05: Yup.number().nullable(),
    fk_actor06: Yup.number().nullable(),
    fk_actor07: Yup.number().nullable(),
    fk_actor08: Yup.number().nullable(),
    fk_actor09: Yup.number().nullable(),
    fk_actor10: Yup.number().nullable(),
    fk_actor11: Yup.number().nullable(),
    fk_actor12: Yup.number().nullable(),
    fk_actor13: Yup.number().nullable(),
    fk_actor14: Yup.number().nullable(),
    fk_actor15: Yup.number().nullable(),
    fk_actor16: Yup.number().nullable(),
    fk_actor17: Yup.number().nullable(),
    fk_actor18: Yup.number().nullable(),
    fk_actor19: Yup.number().nullable(),
    fk_actor20: Yup.number().nullable(),
    fk_genre_en01: Yup.number().nullable(),
    fk_genre_en02: Yup.number().nullable(),
    fk_genre_en03: Yup.number().nullable(),
    fk_genre_en04: Yup.number().nullable(),
    fk_genre_en05: Yup.number().nullable(),
    fk_genre_pt01: Yup.number().nullable(),
    fk_genre_pt02: Yup.number().nullable(),
    fk_genre_pt03: Yup.number().nullable(),
    fk_genre_pt04: Yup.number().nullable(),
    fk_genre_pt05: Yup.number().nullable(),
    fk_rated_pg_en: Yup.number().nullable(),
    fk_rated_pg_pt: Yup.number().nullable(),
    runtime: Yup.string()
      .matches(
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
        "Formato de tempo inválido (HH:mm:ss)"
      )
      .nullable(),
    budget: Yup.number().nullable(),
    box_office: Yup.number().nullable(),
    about_movie_en: Yup.string().nullable(),
    about_movie_pt: Yup.string().nullable(),
    cover_movie_url: Yup.string().required("Cover Movie URL is required"),
    trailer_movie_url: Yup.string().required("Trailer Movie URL is required"),
    image_movie_url01: Yup.string().nullable(),
    image_movie_url02: Yup.string().nullable(),
    image_movie_url03: Yup.string().nullable(),
    image_movie_url04: Yup.string().nullable(),
    image_movie_url05: Yup.string().nullable(),
    image_movie_url06: Yup.string().nullable(),
    image_movie_url07: Yup.string().nullable(),
    image_movie_url08: Yup.string().nullable(),
    image_movie_url09: Yup.string().nullable(),
    image_movie_url10: Yup.string().nullable(),
    my_rating: Yup.number().nullable(),
    my_review_en: Yup.string().nullable(),
    my_review_pt: Yup.string().nullable(),
  });

  const initialValues = {
    title_en: "",
    title_pt: "",
    release_date: "",
    fk_producer_01: null,
    fk_producer_02: null,
    fk_producer_03: null,
    fk_producer_04: null,
    fk_producer_05: null,
    fk_director_01: null,
    fk_director_02: null,
    fk_director_03: null,
    fk_director_04: null,
    fk_director_05: null,
    fk_writer_01: null,
    fk_writer_02: null,
    fk_writer_03: null,
    fk_writer_04: null,
    fk_writer_05: null,
    fk_actor01: null,
    fk_actor02: null,
    fk_actor03: null,
    fk_actor04: null,
    fk_actor05: null,
    fk_actor06: null,
    fk_actor07: null,
    fk_actor08: null,
    fk_actor09: null,
    fk_actor10: null,
    fk_actor11: null,
    fk_actor12: null,
    fk_actor13: null,
    fk_actor14: null,
    fk_actor15: null,
    fk_actor16: null,
    fk_actor17: null,
    fk_actor18: null,
    fk_actor19: null,
    fk_actor20: null,
    fk_genre_en01: null,
    fk_genre_en02: null,
    fk_genre_en03: null,
    fk_genre_en04: null,
    fk_genre_en05: null,
    fk_genre_pt01: null,
    fk_genre_pt02: null,
    fk_genre_pt03: null,
    fk_genre_pt04: null,
    fk_genre_pt05: null,
    fk_rated_pg_en: null,
    fk_rated_pg_pt: null,
    runtime: "",
    budget: null,
    box_office: null,
    about_movie_en: "",
    about_movie_pt: "",
    cover_movie_url: "",
    trailer_movie_url: "",
    image_movie_url01: "",
    image_movie_url02: "",
    image_movie_url03: "",
    image_movie_url04: "",
    image_movie_url05: "",
    image_movie_url06: "",
    image_movie_url07: "",
    image_movie_url08: "",
    image_movie_url09: "",
    image_movie_url10: "",
    my_rating: null,
    my_review_en: "",
    my_review_pt: "",
  };

  interface FormValues {
    title_en: string | null;
    title_pt: string | null;
    release_date: string | null;
    fk_producer_01: number | null;
    fk_producer_02: number | null;
    fk_producer_03: number | null;
    fk_producer_04: number | null;
    fk_producer_05: number | null;
    fk_director_01: number | null;
    fk_director_02: number | null;
    fk_director_03: number | null;
    fk_director_04: number | null;
    fk_director_05: number | null;
    fk_writer_01: number | null;
    fk_writer_02: number | null;
    fk_writer_03: number | null;
    fk_writer_04: number | null;
    fk_writer_05: number | null;
    fk_actor01: number | null;
    fk_actor02: number | null;
    fk_actor03: number | null;
    fk_actor04: number | null;
    fk_actor05: number | null;
    fk_actor06: number | null;
    fk_actor07: number | null;
    fk_actor08: number | null;
    fk_actor09: number | null;
    fk_actor10: number | null;
    fk_actor11: number | null;
    fk_actor12: number | null;
    fk_actor13: number | null;
    fk_actor14: number | null;
    fk_actor15: number | null;
    fk_actor16: number | null;
    fk_actor17: number | null;
    fk_actor18: number | null;
    fk_actor19: number | null;
    fk_actor20: number | null;
    fk_genre_en01: number | null;
    fk_genre_en02: number | null;
    fk_genre_en03: number | null;
    fk_genre_en04: number | null;
    fk_genre_en05: number | null;
    fk_genre_pt01: number | null;
    fk_genre_pt02: number | null;
    fk_genre_pt03: number | null;
    fk_genre_pt04: number | null;
    fk_genre_pt05: number | null;
    fk_rated_pg_en: number | null;
    fk_rated_pg_pt: number | null;
    runtime: string | null;
    budget: number | null;
    box_office: number | null;
    about_movie_en: string | null;
    about_movie_pt: string | null;
    cover_movie_url: string | null;
    trailer_movie_url: string | null;
    image_movie_url01: string | null;
    image_movie_url02: string | null;
    image_movie_url03: string | null;
    image_movie_url04: string | null;
    image_movie_url05: string | null;
    image_movie_url06: string | null;
    image_movie_url07: string | null;
    image_movie_url08: string | null;
    image_movie_url09: string | null;
    image_movie_url10: string | null;
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
    axios.post("http://localhost:3001/movies", transformedValues).then(() => {
      if (setRefreshComponentCounter) {
        setRefreshComponentCounter();
      }
      resetForm();
      alert("Movie posted successfully");
    });
  };

  return (
    <div className="grid w-full">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2 mb-5 text-white font-bold">
          Post Movies
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

            {/*--------------------------- Producer ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Producers</h2>
            {[...Array(5)].map((_, index) => {
              const producerIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_producer${producerIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`fk_producer${producerIndex}`}
                  >
                    Producer {producerIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      autoComplete="off"
                      className="border text-green-500 my-2 w-full"
                      placeholder="Filter Producer"
                      onChange={handleSearchProducer(index)}
                      name={`fk_producer_input${producerIndex}`}
                      id={`fk_producer_input${producerIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="bg-black max-h-[80vh] overflow-y-auto">
                        <DialogTitle className="text-white">Add Producer</DialogTitle>
                        <DialogDescription></DialogDescription>
                        <PostProducers
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[50%] mb-2"
                    autoComplete="off"
                    id={`fk_producer${producerIndex}`}
                    name={`fk_producer${producerIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {producers
                      .filter((value) => {
                        return (
                          value.name_producer &&
                          value.name_producer
                            .toLowerCase()
                            .includes(
                              searchProducer[index]?.toLowerCase() || ""
                            )
                        );
                      })
                      .sort((a, b) =>
                        a.name_producer!.localeCompare(b.name_producer!)
                      )
                      .map((producer) => (
                        <option
                          key={producer.idproducer}
                          value={producer.idproducer}
                        >
                          {producer.name_producer}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_producer${producerIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Directors ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Directors</h2>
            {[...Array(5)].map((_, index) => {
              const directorIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_director${directorIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`fk_director${directorIndex}`}
                  >
                    Director {directorIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="border text-green-500 my-2 w-full"
                      placeholder="Filter director"
                      autoComplete="off"
                      onChange={handleSearchDirector(index)}
                      name={`fk_director_input${directorIndex}`}
                      id={`fk_director_input${directorIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto bg-black">
                        <DialogTitle className="text-white">Add Director</DialogTitle>
                        <DialogDescription></DialogDescription>
                        <PostDirectors
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[50%] mb-2"
                    autoComplete="off"
                    id={`fk_director${directorIndex}`}
                    name={`fk_director${directorIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {directors
                      .filter((value) => {
                        return (
                          (value.first_name &&
                            value.first_name
                              .toLowerCase()
                              .includes(
                                searchDirector[index]?.toLowerCase() || ""
                              )) ||
                          (value.last_name &&
                            value.last_name
                              .toLowerCase()
                              .includes(
                                searchDirector[index]?.toLowerCase() || ""
                              )) ||
                          (value.first_name &&
                            value.last_name &&
                            `${value.first_name} ${value.last_name}`
                              .toLowerCase()
                              .includes(
                                searchDirector[index]?.toLowerCase() || ""
                              ))
                        );
                      })
                      .sort((a, b) =>
                        a.first_name!.localeCompare(b.first_name!)
                      )
                      .map((director) => (
                        <option
                          key={director.iddirector}
                          value={director.iddirector}
                        >
                          {director.first_name} {director.last_name}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_director${directorIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Writers ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Writers</h2>
            {[...Array(5)].map((_, index) => {
              const writerIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_writer${writerIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`fk_writer${writerIndex}`}
                  >
                    Writer {writerIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      autoComplete="off"
                      className="border text-green-500 w-full my-2"
                      placeholder="Filter writer"
                      onChange={handleSearchWriter(index)}
                      name={`fk_writer_input${writerIndex}`}
                      id={`fk_writer_input${writerIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto bg-black">
                        <DialogTitle className="text-white">Add Writer</DialogTitle>
                        <DialogDescription></DialogDescription>
                        <PostWriters
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[50%] mb-2"
                    autoComplete="off"
                    id={`fk_writer${writerIndex}`}
                    name={`fk_writer${writerIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {writers
                      .filter((value) => {
                        return (
                          (value.first_name &&
                            value.first_name
                              .toLowerCase()
                              .includes(
                                searchWriter[index]?.toLowerCase() || ""
                              )) ||
                          (value.last_name &&
                            value.last_name
                              .toLowerCase()
                              .includes(
                                searchWriter[index]?.toLowerCase() || ""
                              )) ||
                          (value.first_name &&
                            value.last_name &&
                            `${value.first_name} ${value.last_name}`
                              .toLowerCase()
                              .includes(
                                searchWriter[index]?.toLowerCase() || ""
                              ))
                        );
                      })
                      .sort((a, b) =>
                        a.first_name!.localeCompare(b.first_name!)
                      )
                      .map((writer) => (
                        <option key={writer.idwriter} value={writer.idwriter}>
                          {writer.first_name} {writer.last_name}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_writer${writerIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Actors ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Actors</h2>
            {[...Array(20)].map((_, index) => {
              const actorIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_actor${actorIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`fk_actor${actorIndex}`}
                  >
                    Actor {actorIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="border text-green-500 w-full my-2"
                      placeholder="Filter actor"
                      autoComplete="off"
                      onChange={handleSearchActor(index)}
                      name={`fk_actor_input${actorIndex}`}
                      id={`fk_actor_input${actorIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto bg-black">
                        <DialogTitle className="text-white">Add Actor</DialogTitle>
                        <DialogDescription></DialogDescription>
                        <PostActors
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[50%] mb-2"
                    autoComplete="off"
                    id={`fk_actor${actorIndex}`}
                    name={`fk_actor${actorIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {actors
                      .filter((value) => {
                        return (
                          (value.first_name &&
                            value.first_name
                              .toLowerCase()
                              .includes(
                                searchActor[index]?.toLowerCase() || ""
                              )) ||
                          (value.last_name &&
                            value.last_name
                              .toLowerCase()
                              .includes(
                                searchActor[index]?.toLowerCase() || ""
                              )) ||
                          (value.first_name &&
                            value.last_name &&
                            `${value.first_name} ${value.last_name}`
                              .toLowerCase()
                              .includes(
                                searchActor[index]?.toLowerCase() || ""
                              ))
                        );
                      })
                      .sort((a, b) =>
                        a.first_name!.localeCompare(b.first_name!)
                      )
                      .map((actor) => (
                        <option key={actor.idactor} value={actor.idactor}>
                          {actor.first_name} {actor.last_name}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_actor${actorIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Genre EN ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Genre En</h2>
            {[...Array(10)].map((_, index) => {
              const genreIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div className="flex flex-col" key={`fk_genre_en${genreIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`fk_genre_en${genreIndex}`}
                  >
                    Genre EN {genreIndex}
                  </label>
                  <div className="flex">
                    <input
                      className="border w-full text-green-500 my-2"
                      type="text"
                      autoComplete="off"
                      placeholder="Filter Genre EN"
                      onChange={handleSearchGenreEn(index)}
                      name={`fk_genre_en_input${genreIndex}`}
                      id={`fk_genre_en_input${genreIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto bg-black mb-4">
                        <DialogTitle className="text-white">Add Genre En</DialogTitle>
                        <DialogDescription></DialogDescription>
                        <PostGenreEn
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[50%] mb-2"
                    autoComplete="off"
                    id={`fk_genre_en${genreIndex}`}
                    name={`fk_genre_en${genreIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {genreEn
                      .filter((value) => {
                        return (
                          value.name_genre_en &&
                          value.name_genre_en
                            .toLowerCase()
                            .includes(searchGenreEn[index]?.toLowerCase() || "")
                        );
                      })
                      .sort((a, b) =>
                        a.name_genre_en!.localeCompare(b.name_genre_en!)
                      )
                      .map((genre) => (
                        <option key={genre.idgenre_en} value={genre.idgenre_en}>
                          {genre.name_genre_en}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_genre_en${genreIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Genre PT ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Genre PT</h2>
            {[...Array(10)].map((_, index) => {
              const genreIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div className="flex flex-col" key={`fk_genre_pt${genreIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`fk_genre_pt${genreIndex}`}
                  >
                    Genre PT {genreIndex}
                  </label>
                  <div className="flex">
                    <input
                      className="border w-full my-2 text-green-500"
                      type="text"
                      placeholder="Filter Genre PT"
                      autoComplete="off"
                      onChange={handleSearchGenrePt(index)}
                      name={`fk_genre_pt_input${genreIndex}`}
                      id={`fk_genre_pt_input${genreIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto bg-black mb-4">
                        <DialogTitle className="text-white">Add Genre Pt</DialogTitle>
                        <DialogDescription></DialogDescription>
                        <PostGenrePt
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[50%] mb-2"
                    autoComplete="off"
                    id={`fk_genre_pt${genreIndex}`}
                    name={`fk_genre_pt${genreIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {genrePt
                      .filter((value) => {
                        return (
                          value.name_genre_pt &&
                          value.name_genre_pt
                            .toLowerCase()
                            .includes(searchGenrePt[index]?.toLowerCase() || "")
                        );
                      })
                      .sort((a, b) =>
                        a.name_genre_pt!.localeCompare(b.name_genre_pt!)
                      )
                      .map((genre) => (
                        <option key={genre.idgenre_pt} value={genre.idgenre_pt}>
                          {genre.name_genre_pt}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_genre_pt${genreIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Rated PG EN ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Rated PG USA - BR</h2>
            <label htmlFor="fk_rated_pg_en" className="font-bold">
              Rated PG EN
            </label>
            <Field
              as="select"
              className="border w-[50%] my-2"
              autoComplete="off"
              id="fk_rated_pg_en"
              name="fk_rated_pg_en"
            >
              <option value="">Select an Option</option>
              {ratedPgEn.map((ratedPg) => (
                <option
                  key={ratedPg.idrated_pg_en}
                  value={ratedPg.idrated_pg_en}
                >
                  {ratedPg.rating_pg_en}
                </option>
              ))}
            </Field>
            <ErrorMessage name="fk_rated_pg_en" component="div" />

            {/*--------------------------- Rated PG PT ----------------------------------- */}

            <label htmlFor="fk_rated_pg_pt" className="font-bold">
              Rated PG PT
            </label>
            <Field
              as="select"
              className="border w-[50%] my-2"
              autoComplete="off"
              id="fk_rated_pg_pt"
              name="fk_rated_pg_pt"
            >
              <option value="">Select an Option</option>
              {ratedPgPt.map((ratedPg) => (
                <option
                  key={ratedPg.idrated_pg_pt}
                  value={ratedPg.idrated_pg_pt}
                >
                  {ratedPg.rating_pg_pt}
                </option>
              ))}
            </Field>
            <ErrorMessage name="fk_rated_pg_pt" component="div" />

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

            {/*--------------------------- Budget ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Budget</h2>
            <label htmlFor="budget" className="font-bold">
              Budget
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="budget"
              name="budget"
              placeholder="0"
            />
            <ErrorMessage name="budget" component="div" />

            {/*--------------------------- Box Office ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Box Office</h2>
            <label htmlFor="box_office" className="font-bold">
              Box Office
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="box_office"
              name="box_office"
              placeholder="0"
            />
            <ErrorMessage name="box_office" component="div" />

            {/*--------------------------- About Movie EN ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">About Movie</h2>
            <label htmlFor="about_movie_en" className="font-bold">
              About Movie EN
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="about_movie_en"
              name="about_movie_en"
              placeholder="Abc"
            />
            <ErrorMessage name="about_movie_en" component="div" />

            {/*--------------------------- About Movie PT ----------------------------------- */}

            <label htmlFor="about_movie_pt" className="font-bold">
              About Movie PT
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="about_movie_pt"
              name="about_movie_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="about_movie_pt" component="div" />

            {/*--------------------------- Cover Movie URL ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Movies Cover URL</h2>
            <label htmlFor="cover_movie_url" className="font-bold">
              Cover Movie URL *
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="cover_movie_url"
              name="cover_movie_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage
              name="cover_movie_url"
              className="text-red-500"
              component="div"
            />

            {/*--------------------------- Trailer Movie URL ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Movies Trailer URL</h2>
            <label htmlFor="trailer_movie_url" className="font-bold">
              Trailer Movie URL *
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="trailer_movie_url"
              name="trailer_movie_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage
              name="trailer_movie_url"
              className="text-red-500"
              component="div"
            />

            {/*--------------------------- Image Movie URL ----------------------------------- */}
            <h2 className="text-4xl font-bold my-2">Movies Prints</h2>
            {[...Array(10)].map((_, index) => {
              const imageIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`image_movie_url${imageIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`image_movie_url${imageIndex}`}
                  >
                    Image Movie URL {imageIndex}
                  </label>
                  <Field
                    className="border ml-2 my-1"
                    autoComplete="off"
                    id={`image_movie_url${imageIndex}`}
                    name={`image_movie_url${imageIndex}`}
                    placeholder="https://exemple.com"
                  />
                  <ErrorMessage
                    name={`image_movie_url${imageIndex}`}
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
