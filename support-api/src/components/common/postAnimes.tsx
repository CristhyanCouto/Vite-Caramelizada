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
  SeasonsAnimesCardProps,
} from "@/lib/nonPersonInterfaces";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import PostGenreEn from "./postGenreEn";
import PostGenrePt from "./postGenrePt";
import { CreatorCardProps } from "@/lib/person";
import PostCreators from "./postCreators";
import PostSeasonAnimes from "./postSeasonAnimes";
import PostProducers from "./postProducers";

interface PostAnimesProps {
  setRefreshComponentCounter?: () => void;
}

export default function PostAnimes({
  setRefreshComponentCounter,
}: PostAnimesProps) {
  const [counter, setCounter] = useState<number>(0);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [dateOfRelease, setDateOfRelease] = useState<string>("");
  const [producers, setProducers] = useState<ProducersCardProps[]>([]);
  const [creators, setCreators] = useState<CreatorCardProps[]>([]);
  const [seasons, setSeasons] = useState<SeasonsAnimesCardProps[]>([]);
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

  //Search by seasons
  const [searchSeason, setSearchSeason] = useState<string[]>([]);
  const handleSearchSeason =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchSeason = [...searchSeason];
      newSearchSeason[index] = e.target.value;
      setSearchSeason(newSearchSeason);
    };

  //Searchs by creators
  const [searchCreator, setSearchCreator] = useState<string[]>([]);
  const handleSearchCreator =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchCreator = [...searchCreator];
      newSearchCreator[index] = e.target.value;
      setSearchCreator(newSearchCreator);
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
    axios.get("http://localhost:3001/creators").then((response) => {
      setCreators(response.data);
    });
    axios.get("http://localhost:3001/seasonsAnimes").then((response) => {
      setSeasons(response.data);
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
    fk_creator_01: Yup.number().nullable(),
    fk_creator_02: Yup.number().nullable(),
    fk_creator_03: Yup.number().nullable(),
    fk_creator_04: Yup.number().nullable(),
    fk_creator_05: Yup.number().nullable(),
    fk_season01: Yup.number().nullable(),
    fk_season02: Yup.number().nullable(),
    fk_season03: Yup.number().nullable(),
    fk_season04: Yup.number().nullable(),
    fk_season05: Yup.number().nullable(),
    fk_season06: Yup.number().nullable(),
    fk_season07: Yup.number().nullable(),
    fk_season08: Yup.number().nullable(),
    fk_season09: Yup.number().nullable(),
    fk_season10: Yup.number().nullable(),
    fk_season11: Yup.number().nullable(),
    fk_season12: Yup.number().nullable(),
    fk_season13: Yup.number().nullable(),
    fk_season14: Yup.number().nullable(),
    fk_season15: Yup.number().nullable(),
    fk_season16: Yup.number().nullable(),
    fk_season17: Yup.number().nullable(),
    fk_season18: Yup.number().nullable(),
    fk_season19: Yup.number().nullable(),
    fk_season20: Yup.number().nullable(),
    fk_season21: Yup.number().nullable(),
    fk_season22: Yup.number().nullable(),
    fk_season23: Yup.number().nullable(),
    fk_season24: Yup.number().nullable(),
    fk_season25: Yup.number().nullable(),
    fk_season26: Yup.number().nullable(),
    fk_season27: Yup.number().nullable(),
    fk_season28: Yup.number().nullable(),
    fk_season29: Yup.number().nullable(),
    fk_season30: Yup.number().nullable(),
    fk_genre_en01: Yup.number().nullable(),
    fk_genre_en02: Yup.number().nullable(),
    fk_genre_en03: Yup.number().nullable(),
    fk_genre_en04: Yup.number().nullable(),
    fk_genre_en05: Yup.number().nullable(),
    fk_genre_en06: Yup.number().nullable(),
    fk_genre_en07: Yup.number().nullable(),
    fk_genre_en08: Yup.number().nullable(),
    fk_genre_en09: Yup.number().nullable(),
    fk_genre_en10: Yup.number().nullable(),
    fk_genre_pt01: Yup.number().nullable(),
    fk_genre_pt02: Yup.number().nullable(),
    fk_genre_pt03: Yup.number().nullable(),
    fk_genre_pt04: Yup.number().nullable(),
    fk_genre_pt05: Yup.number().nullable(),
    fk_genre_pt06: Yup.number().nullable(),
    fk_genre_pt07: Yup.number().nullable(),
    fk_genre_pt08: Yup.number().nullable(),
    fk_genre_pt09: Yup.number().nullable(),
    fk_genre_pt10: Yup.number().nullable(),
    fk_rated_pg_en: Yup.number().nullable(),
    fk_rated_pg_pt: Yup.number().nullable(),
    runtime: Yup.string()
      .matches(
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
        "Formato de tempo inválido (HH:mm:ss)"
      )
      .nullable(),
    season_count: Yup.number().nullable(),
    about_anime_en: Yup.string().nullable(),
    about_anime_pt: Yup.string().nullable(),
    cover_anime_url: Yup.string().required("Cover Anime URL is required"),
    trailer_anime_url: Yup.string().required("Trailer Anime URL is required"),
    image_anime_url01: Yup.string().nullable(),
    image_anime_url02: Yup.string().nullable(),
    image_anime_url03: Yup.string().nullable(),
    image_anime_url04: Yup.string().nullable(),
    image_anime_url05: Yup.string().nullable(),
    image_anime_url06: Yup.string().nullable(),
    image_anime_url07: Yup.string().nullable(),
    image_anime_url08: Yup.string().nullable(),
    image_anime_url09: Yup.string().nullable(),
    image_anime_url10: Yup.string().nullable(),
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
    fk_creator_01: null,
    fk_creator_02: null,
    fk_creator_03: null,
    fk_creator_04: null,
    fk_creator_05: null,
    fk_season01: null,
    fk_season02: null,
    fk_season03: null,
    fk_season04: null,
    fk_season05: null,
    fk_season06: null,
    fk_season07: null,
    fk_season08: null,
    fk_season09: null,
    fk_season10: null,
    fk_season11: null,
    fk_season12: null,
    fk_season13: null,
    fk_season14: null,
    fk_season15: null,
    fk_season16: null,
    fk_season17: null,
    fk_season18: null,
    fk_season19: null,
    fk_season20: null,
    fk_season21: null,
    fk_season22: null,
    fk_season23: null,
    fk_season24: null,
    fk_season25: null,
    fk_season26: null,
    fk_season27: null,
    fk_season28: null,
    fk_season29: null,
    fk_season30: null,
    fk_genre_en01: null,
    fk_genre_en02: null,
    fk_genre_en03: null,
    fk_genre_en04: null,
    fk_genre_en05: null,
    fk_genre_en06: null,
    fk_genre_en07: null,
    fk_genre_en08: null,
    fk_genre_en09: null,
    fk_genre_en10: null,
    fk_genre_pt01: null,
    fk_genre_pt02: null,
    fk_genre_pt03: null,
    fk_genre_pt04: null,
    fk_genre_pt05: null,
    fk_genre_pt06: null,
    fk_genre_pt07: null,
    fk_genre_pt08: null,
    fk_genre_pt09: null,
    fk_genre_pt10: null,
    fk_rated_pg_en: null,
    fk_rated_pg_pt: null,
    runtime: "",
    season_count: null,
    about_anime_en: "",
    about_anime_pt: "",
    cover_anime_url: "",
    trailer_anime_url: "",
    image_anime_url01: "",
    image_anime_url02: "",
    image_anime_url03: "",
    image_anime_url04: "",
    image_anime_url05: "",
    image_anime_url06: "",
    image_anime_url07: "",
    image_anime_url08: "",
    image_anime_url09: "",
    image_anime_url10: "",
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
    fk_creator_01: number | null;
    fk_creator_02: number | null;
    fk_creator_03: number | null;
    fk_creator_04: number | null;
    fk_creator_05: number | null;
    fk_season01: number | null;
    fk_season02: number | null;
    fk_season03: number | null;
    fk_season04: number | null;
    fk_season05: number | null;
    fk_season06: number | null;
    fk_season07: number | null;
    fk_season08: number | null;
    fk_season09: number | null;
    fk_season10: number | null;
    fk_season11: number | null;
    fk_season12: number | null;
    fk_season13: number | null;
    fk_season14: number | null;
    fk_season15: number | null;
    fk_season16: number | null;
    fk_season17: number | null;
    fk_season18: number | null;
    fk_season19: number | null;
    fk_season20: number | null;
    fk_season21: number | null;
    fk_season22: number | null;
    fk_season23: number | null;
    fk_season24: number | null;
    fk_season25: number | null;
    fk_season26: number | null;
    fk_season27: number | null;
    fk_season28: number | null;
    fk_season29: number | null;
    fk_season30: number | null;
    fk_genre_en01: number | null;
    fk_genre_en02: number | null;
    fk_genre_en03: number | null;
    fk_genre_en04: number | null;
    fk_genre_en05: number | null;
    fk_genre_en06: number | null;
    fk_genre_en07: number | null;
    fk_genre_en08: number | null;
    fk_genre_en09: number | null;
    fk_genre_en10: number | null;
    fk_genre_pt01: number | null;
    fk_genre_pt02: number | null;
    fk_genre_pt03: number | null;
    fk_genre_pt04: number | null;
    fk_genre_pt05: number | null;
    fk_genre_pt06: number | null;
    fk_genre_pt07: number | null;
    fk_genre_pt08: number | null;
    fk_genre_pt09: number | null;
    fk_genre_pt10: number | null;
    fk_rated_pg_en: number | null;
    fk_rated_pg_pt: number | null;
    runtime: string | null;
    season_count: number | null;
    about_anime_en: string | null;
    about_anime_pt: string | null;
    cover_anime_url: string | null;
    trailer_anime_url: string | null;
    image_anime_url01: string | null;
    image_anime_url02: string | null;
    image_anime_url03: string | null;
    image_anime_url04: string | null;
    image_anime_url05: string | null;
    image_anime_url06: string | null;
    image_anime_url07: string | null;
    image_anime_url08: string | null;
    image_anime_url09: string | null;
    image_anime_url10: string | null;
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
    axios.post("http://localhost:3001/animes", transformedValues).then(() => {
      if (setRefreshComponentCounter) {
        setRefreshComponentCounter();
      }
      resetForm();
      alert("Anime posted successfully");
    });
  };

  return (
    <div className="grid w-full">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2 mb-5 text-white font-bold">
          Post Animes
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
                        <DialogTitle className="text-white">
                          Add Producer
                        </DialogTitle>
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

            {/*--------------------------- Creators ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Creators</h2>
            {[...Array(5)].map((_, index) => {
              const creatorIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_creator${creatorIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`fk_creator${creatorIndex}`}
                  >
                    Creator {creatorIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="border text-green-500 my-2 w-full"
                      placeholder="Filter Creator"
                      autoComplete="off"
                      onChange={handleSearchCreator(index)}
                      name={`fk_creator_input${creatorIndex}`}
                      id={`fk_creator_input${creatorIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto bg-black">
                        <DialogTitle className="text-white">
                          Add Creator
                        </DialogTitle>
                        <DialogDescription></DialogDescription>
                        <PostCreators
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[50%] mb-2"
                    autoComplete="off"
                    id={`fk_creator${creatorIndex}`}
                    name={`fk_creator${creatorIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {creators
                      .filter((value) => {
                        return (
                          (value.first_name &&
                            value.first_name
                              .toLowerCase()
                              .includes(
                                searchCreator[index]?.toLowerCase() || ""
                              )) ||
                          (value.last_name &&
                            value.last_name
                              .toLowerCase()
                              .includes(
                                searchCreator[index]?.toLowerCase() || ""
                              )) ||
                          (value.first_name &&
                            value.last_name &&
                            `${value.first_name} ${value.last_name}`
                              .toLowerCase()
                              .includes(
                                searchCreator[index]?.toLowerCase() || ""
                              ))
                        );
                      })
                      .sort((a, b) =>
                        a.first_name!.localeCompare(b.first_name!)
                      )
                      .map((creator) => (
                        <option
                          key={creator.idcreator}
                          value={creator.idcreator}
                        >
                          {creator.first_name} {creator.last_name}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_creator${creatorIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Seasons ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Seasons</h2>
            {[...Array(30)].map((_, index) => {
              const seasonIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_season${seasonIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`fk_season${seasonIndex}`}
                  >
                    Season {seasonIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      autoComplete="off"
                      className="border text-green-500 w-full my-2"
                      placeholder="Filter Season"
                      onChange={handleSearchSeason(index)}
                      name={`fk_season_input${seasonIndex}`}
                      id={`fk_season_input${seasonIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto bg-black">
                        <DialogTitle className="text-white">
                          Add Season
                        </DialogTitle>
                        <DialogDescription></DialogDescription>
                        <PostSeasonAnimes
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[50%] mb-2"
                    autoComplete="off"
                    id={`fk_season${seasonIndex}`}
                    name={`fk_season${seasonIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {seasons
                      .filter((value) => {
                        return (
                          (value.title_en &&
                            value.title_en
                              .toLowerCase()
                              .includes(
                                searchSeason[index]?.toLowerCase() || ""
                              )) ||
                          (value.title_pt &&
                            value.title_pt
                              .toLowerCase()
                              .includes(
                                searchSeason[index]?.toLowerCase() || ""
                              ))
                        );
                      })
                      .sort((a, b) => a.title_en!.localeCompare(b.title_en!))
                      .map((season) => (
                        <option
                          key={season.idseason_anime}
                          value={season.idseason_anime}
                        >
                          {season.title_en}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_season${seasonIndex}`}
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
                        <DialogTitle className="text-white">
                          Add Genre En
                        </DialogTitle>
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
                        <DialogTitle className="text-white">
                          Add Genre Pt
                        </DialogTitle>
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

            {/*--------------------------- Season Count ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Season Count</h2>
            <label htmlFor="season_count" className="font-bold">
              Season Count
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="season_count"
              name="season_count"
              placeholder="0"
            />
            <ErrorMessage name="season_count" component="div" />

            {/*--------------------------- About Anime EN ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">About Anime</h2>
            <label htmlFor="about_movie_en" className="font-bold">
              About Anime EN
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="about_anime_en"
              name="about_anime_en"
              placeholder="Abc"
            />
            <ErrorMessage name="about_anime_en" component="div" />

            {/*--------------------------- About Anime PT ----------------------------------- */}

            <label htmlFor="about_anime_pt" className="font-bold">
              About Anime PT
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="about_anime_pt"
              name="about_anime_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="about_anime_pt" component="div" />

            {/*--------------------------- Cover Anime URL ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Anime Cover URL</h2>
            <label htmlFor="cover_anime_url" className="font-bold">
              Cover Anime URL *
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="cover_anime_url"
              name="cover_anime_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage
              name="cover_anime_url"
              className="text-red-500"
              component="div"
            />

            {/*--------------------------- Trailer Anime URL ----------------------------------- */}

            <h2 className="text-4xl font-bold my-2">Anime Trailer URL</h2>
            <label htmlFor="trailer_anime_url" className="font-bold">
              Trailer Anime URL *
            </label>
            <Field
              className="border w-full my-2"
              autoComplete="off"
              id="trailer_anime_url"
              name="trailer_anime_url"
              placeholder="https://exemple.com"
            />
            <ErrorMessage
              name="trailer_anime_url"
              className="text-red-500"
              component="div"
            />

            {/*--------------------------- Image Anime URL ----------------------------------- */}
            <h2 className="text-4xl font-bold my-2">Anime Prints</h2>
            {[...Array(10)].map((_, index) => {
              const imageIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`image_anime_url${imageIndex}`}>
                  <label
                    className="font-bold"
                    htmlFor={`image_anime_url${imageIndex}`}
                  >
                    Image Anime URL {imageIndex}
                  </label>
                  <Field
                    className="border ml-2 my-1"
                    autoComplete="off"
                    id={`image_anime_url${imageIndex}`}
                    name={`image_anime_url${imageIndex}`}
                    placeholder="https://exemple.com"
                  />
                  <ErrorMessage
                    name={`image_anime_url${imageIndex}`}
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
