import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { DatePickerForm } from "./datePickerForm";
import { GenreEnCardProps, GenrePtCardProps, PlataformsCardProps, PublishersGamesCardProps } from "@/lib/nonPersonInterfaces";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { CreatorCardProps } from "@/lib/person";
import PostCreators from "./postCreators";
import PostPublishersGames from "./postPublishersGames";
import PostPlataforms from "./postPlataforms";

interface PostGamesProps {
  setRefreshComponentCounter?: () => void;
}

export default function PostGames({
  setRefreshComponentCounter,
}: PostGamesProps) {
  const [counter, setCounter] = useState<number>(0);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [dateOfRelease, setDateOfRelease] = useState<string>("");
  const [creators, setCreators] = useState<CreatorCardProps[]>([]);
  const [publisherGames, setPublisherGames] = useState<PublishersGamesCardProps[]>([]);
  const [plataforms, setPlataforms] = useState<PlataformsCardProps[]>([]);
  const [genreEn, setGenreEn] = useState<GenreEnCardProps[]>([]);
  const [genrePt, setGenrePt] = useState<GenrePtCardProps[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:3001/genreEns").then((response) => {
      setGenreEn(response.data);
    });
    axios.get("http://localhost:3001/genrePts").then((response) => {
      setGenrePt(response.data);
    });
    axios.get("http://localhost:3001/creators").then((response) => {
      setCreators(response.data);
    });
    axios.get("http://localhost:3001/publisherGames").then((response) => {
      setPublisherGames(response.data);
    });
    axios.get("http://localhost:3001/plataforms").then((response) => {
      setPlataforms(response.data);
    });
  }, [counter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleRefresh = () => {
    setCounter((prevCounter) => prevCounter + 1); // Incrementa o contador para forçar o refresh
  };

  const validationSchema = Yup.object({
    title_en: Yup.string().required("Title EN is required"),
    title_pt: Yup.string().required("Title PT is required"),
    release_date: Yup.date().nullable(),
    fk_creator01: Yup.number().nullable(),
    fk_creator02: Yup.number().nullable(),
    fk_creator03: Yup.number().nullable(),
    fk_creator04: Yup.number().nullable(),
    fk_creator05: Yup.number().nullable(),
    fk_publisher_games01: Yup.number().nullable(),
    fk_publisher_games02: Yup.number().nullable(),
    fk_publisher_games03: Yup.number().nullable(),
    fk_publisher_games04: Yup.number().nullable(),
    fk_publisher_games05: Yup.number().nullable(),
    fk_plataform01: Yup.number().nullable(),
    fk_plataform02: Yup.number().nullable(),
    fk_plataform03: Yup.number().nullable(),
    fk_plataform04: Yup.number().nullable(),
    fk_plataform05: Yup.number().nullable(),
    fk_plataform06: Yup.number().nullable(),
    fk_plataform07: Yup.number().nullable(),
    fk_plataform08: Yup.number().nullable(),
    fk_plataform09: Yup.number().nullable(),
    fk_plataform10: Yup.number().nullable(),
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
    about_game_en: Yup.string().nullable(),
    about_game_pt: Yup.string().nullable(),
    cover_game_url: Yup.string().required("Cover Movie URL is required"),
    trailer_game_url: Yup.string().required("Trailer Movie URL is required"),
    image_game_url01: Yup.string().nullable(),
    image_game_url02: Yup.string().nullable(),
    image_game_url03: Yup.string().nullable(),
    image_game_url04: Yup.string().nullable(),
    image_game_url05: Yup.string().nullable(),
    image_game_url06: Yup.string().nullable(),
    image_game_url07: Yup.string().nullable(),
    image_game_url08: Yup.string().nullable(),
    image_game_url09: Yup.string().nullable(),
    image_game_url10: Yup.string().nullable(),
    my_rating: Yup.number().nullable(),
    singleplayer: Yup.number().nullable(),
    multiplayer_local: Yup.number().nullable(),
    multiplayer: Yup.number().nullable(),
    my_review_en: Yup.string().nullable(),
    my_review_pt: Yup.string().nullable(),
  });

  const initialValues: FormValues = {
    title_en: '',
    title_pt: '',
    release_date: '',
    fk_creator01: null,
    fk_creator02: null,
    fk_creator03: null,
    fk_creator04: null,
    fk_creator05: null,
    fk_publisher_games01: null,
    fk_publisher_games02: null,
    fk_publisher_games03: null,
    fk_publisher_games04: null,
    fk_publisher_games05: null,
    fk_plataform01: null,
    fk_plataform02: null,
    fk_plataform03: null,
    fk_plataform04: null,
    fk_plataform05: null,
    fk_plataform06: null,
    fk_plataform07: null,
    fk_plataform08: null,
    fk_plataform09: null,
    fk_plataform10: null,
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
    about_game_en: '',
    about_game_pt: '',
    cover_game_url: '',
    trailer_game_url: '',
    image_game_url01: '',
    image_game_url02: '',
    image_game_url03: '',
    image_game_url04: '',
    image_game_url05: '',
    image_game_url06: '',
    image_game_url07: '',
    image_game_url08: '',
    image_game_url09: '',
    image_game_url10: '',
    my_rating: null,
    singleplayer: null,
    multiplayer_local: null,
    multiplayer: null,
    my_review_en: '',
    my_review_pt: '',
  };

  interface FormValues {
    title_en: string | null;
    title_pt: string | null;
    release_date: string | null;
    fk_creator01: number | null;
    fk_creator02: number | null;
    fk_creator03: number | null;
    fk_creator04: number | null;
    fk_creator05: number | null;
    fk_publisher_games01: number | null;
    fk_publisher_games02: number | null;
    fk_publisher_games03: number | null;
    fk_publisher_games04: number | null;
    fk_publisher_games05: number | null;
    fk_plataform01: number | null;
    fk_plataform02: number | null;
    fk_plataform03: number | null;
    fk_plataform04: number | null;
    fk_plataform05: number | null;
    fk_plataform06: number | null;
    fk_plataform07: number | null;
    fk_plataform08: number | null;
    fk_plataform09: number | null;
    fk_plataform10: number | null;
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
    about_game_en: string | null;
    about_game_pt: string | null;
    cover_game_url: string | null;
    trailer_game_url: string | null;
    image_game_url01: string | null;
    image_game_url02: string | null;
    image_game_url03: string | null;
    image_game_url04: string | null;
    image_game_url05: string | null;
    image_game_url06: string | null;
    image_game_url07: string | null;
    image_game_url08: string | null;
    image_game_url09: string | null;
    image_game_url10: string | null;
    my_rating: number | null;
    singleplayer: number | null;
    multiplayer_local: number | null;
    multiplayer: number | null;
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
    axios.post("http://localhost:3001/games", transformedValues).then(() => {
      if (setRefreshComponentCounter) {
        setRefreshComponentCounter();
      }
      resetForm();
      alert("Game posted successfully");
    });
  };

  return (
    <div className="grid">
      <div className="grid grid-cols-1 justify-center px-6">
        <h1 className="text-4xl text-center flex justify-center items-center bold p-2">
          Post Games
        </h1>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="grid grid-cols-1 p-10 border">
            <h2 className="text-4xl font-bold">Title</h2>
            <label htmlFor="title_en">Title EN *</label>
            <Field
              className="border"
              autoComplete="off"
              id="title_en"
              name="title_en"
              placeholder="Abc"
            />
            <ErrorMessage name="title_en" component="div" />

            <label htmlFor="title_pt">Title PT *</label>
            <Field
              className="border"
              autoComplete="off"
              id="title_pt"
              name="title_pt"
              placeholder="Abc"
            />
            <ErrorMessage name="title_pt" component="div" />

            {/*--------------------------- Release Date ----------------------------------- */}

            <h2 className="text-4xl font-bold">Release Date</h2>
            <label htmlFor="release_date">Release Date ?</label>
            <div className="flex flex-row items-center mb-2">
              <input
                name="inputReleaseDate"
                className="border h-10 rounded-sm mr-2"
                type="text"
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
              className="border"
              autoComplete="off"
              id="release_date"
              name="release_date"
              placeholder="00/00/0000"
            >
              <option value="00/00/0000">Select an Option</option>
              <option value={dateOfRelease}>{dateOfRelease}</option>
            </Field>
            <ErrorMessage name="release_date" component="div" />

            {/*--------------------------- Creators ----------------------------------- */}

            <h2 className="text-4xl font-bold">Creator</h2>
            {[...Array(5)].map((_, index) => {
              const creatorIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_creator${creatorIndex}`}>
                  <label htmlFor={`fk_creator${creatorIndex}`}>
                    Creator {creatorIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="border"
                      placeholder="Filter Creator"
                      onChange={handleSearch}
                      name={`fk_creator_input${creatorIndex}`}
                      id={`fk_creator_input${creatorIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto">
                      <DialogTitle>Add Creator</DialogTitle>
                      <DialogDescription></DialogDescription>
                        <PostCreators
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[40%]"
                    autoComplete="off"
                    id={`fk_creator${creatorIndex}`}
                    name={`fk_creator${creatorIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {creators
                      .filter((value) => {
                        return (
                          value.first_name &&
                          value.first_name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                            ||
                            value.last_name &&
                            value.last_name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                            ||
                            value.first_name &&
                            value.last_name &&
                            `${value.first_name} ${value.last_name}`
                            .toLowerCase()
                            .includes(search.toLowerCase())
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

            {/*--------------------------- Publisher Games ----------------------------------- */}

            <h2 className="text-4xl font-bold">Publisher</h2>
            {[...Array(5)].map((_, index) => {
              const publisherIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_publisher_games${publisherIndex}`}>
                  <label htmlFor={`fk_publisher_games${publisherIndex}`}>
                    Publisher {publisherIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="border"
                      placeholder="Filter Publisher"
                      onChange={handleSearch}
                      name={`fk_publisher_games_input${publisherIndex}`}
                      id={`fk_publisher_games_input${publisherIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto">
                      <DialogTitle>Add Publisher</DialogTitle>
                      <DialogDescription></DialogDescription>
                        <PostPublishersGames
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[40%]"
                    autoComplete="off"
                    id={`fk_publisher_games${publisherIndex}`}
                    name={`fk_publisher_games${publisherIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {publisherGames
                      .filter((value) => {
                        return (
                          (value.name_publisher_games &&
                            value.name_publisher_games
                              .toLowerCase()
                              .includes(search.toLowerCase()))
                        );
                      })
                      .sort((a, b) =>
                        a.name_publisher_games!.localeCompare(b.name_publisher_games!)
                      )
                      .map((publisher) => (
                        <option
                          key={publisher.idpublisher_games}
                          value={publisher.idpublisher_games}
                        >
                          {publisher.name_publisher_games}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_publisher_games${publisherIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Plataform ----------------------------------- */}

            <h2 className="text-4xl font-bold">Plataforms</h2>
            {[...Array(10)].map((_, index) => {
              const plataformIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`fk_plataform${plataformIndex}`}>
                  <label htmlFor={`fk_plataform${plataformIndex}`}>
                    Plataform {plataformIndex}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="border"
                      placeholder="Filter Plataform"
                      onChange={handleSearch}
                      name={`fk_plataform_input${plataformIndex}`}
                      id={`fk_plataform_input${plataformIndex}`}
                    />
                    <Dialog>
                      <DialogTrigger>+</DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto">
                      <DialogTitle>Add Plataform</DialogTitle>
                      <DialogDescription></DialogDescription>
                        <PostPlataforms
                          setRefreshComponentCounter={handleRefresh}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Field
                    as="select"
                    className="border w-[40%]"
                    autoComplete="off"
                    id={`fk_plataform${plataformIndex}`}
                    name={`fk_plataform${plataformIndex}`}
                  >
                    <option value="">Select an Option</option>
                    {plataforms
                      .filter((value) => {
                        return (
                          (value.name_plataform &&
                            value.name_plataform
                              .toLowerCase()
                              .includes(search.toLowerCase()))
                        );
                      })
                      .sort((a, b) =>
                        a.name_plataform!.localeCompare(b.name_plataform!)
                      )
                      .map((plataform) => (
                        <option key={plataform.idplataform} value={plataform.idplataform}>
                          {plataform.name_plataform}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    name={`fk_plataform${plataformIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- Genre EN ----------------------------------- */}

            <h2 className="text-4xl font-bold">Genre En</h2>
            {[...Array(5)].map((_, index) => {
              const genreIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div className="flex flex-col" key={`fk_genre_en${genreIndex}`}>
                  <label htmlFor={`fk_genre_en${genreIndex}`}>
                    Genre EN {genreIndex}
                  </label>
                  <input className="border w-[20%]" type="text" placeholder="Filter Genre EN"
                  onChange={handleSearch}
                  name={`fk_genre_en_input${genreIndex}`}
                  id={`fk_genre_en_input${genreIndex}`} />
                  <Field
                    as="select"
                    className="border w-[40%]"
                    autoComplete="off"
                    id={`fk_genre_en${genreIndex}`}
                    name={`fk_genre_en${genreIndex}`}

                  >
                    <option value="">Select an Option</option>
                    {genreEn.filter((value) =>{
                      return (
                        value.name_genre_en &&
                        value.name_genre_en
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      );
                    }).sort(
                      (a, b) =>
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
            }
            )}

            {/*--------------------------- Genre PT ----------------------------------- */}
  
            <h2 className="text-4xl font-bold">Genre PT</h2>
            {[...Array(5)].map((_, index) => {
              const genreIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div className="flex flex-col" key={`fk_genre_pt${genreIndex}`}>
                  <label htmlFor={`fk_genre_pt${genreIndex}`}>
                    Genre PT {genreIndex}
                  </label>
                  <input className='border w-[20%]' type="text" placeholder="Filter Genre PT"
                  onChange={handleSearch}
                  name={`fk_genre_pt_input${genreIndex}`}
                  id={`fk_genre_pt_input${genreIndex}`} />
                  <Field
                    as="select"
                    className="border w-[40%]"
                    autoComplete="off"
                    id={`fk_genre_pt${genreIndex}`}
                    name={`fk_genre_pt${genreIndex}`}

                  >
                    <option value="">Select an Option</option>
                    {genrePt.filter((value) =>{
                      return (
                        value.name_genre_pt &&
                        value.name_genre_pt
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      );
                    }).sort(
                      (a, b) =>
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
            }
            )}

            {/*--------------------------- About Gane EN ----------------------------------- */}

            <h2 className="text-4xl font-bold">About Game</h2>
            <label htmlFor="about_game_en">About Game EN</label>
            <Field
              className="border"
              autoComplete="off"
              id="about_game_en"
              name="about_game_en"
              placeholder="Abc"
            >
            </Field>
            <ErrorMessage name="about_game_en" component="div" />

            {/*--------------------------- About Game PT ----------------------------------- */}

            <label htmlFor="about_game_pt">About Game PT</label>
            <Field
              className="border"
              autoComplete="off"
              id="about_game_pt"
              name="about_game_pt"
              placeholder="Abc"
            >
            </Field>
            <ErrorMessage name="about_game_pt" component="div" />

            {/*--------------------------- Cover Game URL ----------------------------------- */}

            <h2 className="text-4xl font-bold">Game Cover URL</h2>
            <label htmlFor="cover_game_url">Cover Game URL *</label>
            <Field
              className="border"
              autoComplete="off"
              id="cover_game_url"
              name="cover_game_url"
              placeholder="https://exemple.com"
            >
            </Field>
            <ErrorMessage name="cover_game_url" component="div" />

            {/*--------------------------- Trailer Game URL ----------------------------------- */}

            <h2 className="text-4xl font-bold">Game Trailer URL</h2>
            <label htmlFor="trailer_game_url">Trailer Game URL *</label>
            <Field
              className="border"
              autoComplete="off"
              id="trailer_game_url"
              name="trailer_game_url"
              placeholder="https://exemple.com"
            >
            </Field>
            <ErrorMessage name="trailer_game_url" component="div" />

            {/*--------------------------- Image Game URL ----------------------------------- */}
            <h2 className="text-4xl font-bold">Game Prints</h2>
            {[...Array(10)].map((_, index) => {
              const imageIndex = (index + 1).toString().padStart(2, "0");
              return (
                <div key={`image_game_url${imageIndex}`}>
                  <label htmlFor={`image_game_url${imageIndex}`}>
                    Image Game URL {imageIndex}
                  </label>
                  <Field
                    className="border ml-2"
                    autoComplete="off"
                    id={`image_game_url${imageIndex}`}
                    name={`image_game_url${imageIndex}`}
                    placeholder="https://exemple.com"
                  >
                  </Field>
                  <ErrorMessage
                    name={`image_game_url${imageIndex}`}
                    component="div"
                  />
                </div>
              );
            })}

            {/*--------------------------- My Rating ----------------------------------- */}
            <h2 className="text-4xl font-bold">My Rating</h2>
            <label htmlFor="my_rating">My Rating</label>
            <Field
              className="border"
              autoComplete="off"
              id="my_rating"
              name="my_rating"
              placeholder="0.0"
            >
            </Field>
            <ErrorMessage name="my_rating" component="div" />

            {/*--------------------------- Multiplayer ----------------------------------- */}
            <h2 className="text-4xl font-bold">Singleplayer</h2>
            <label htmlFor="singleplayer">Has Singleplayer</label>
            <Field
                as="select"
              className="border"
              autoComplete="off"
              id="singleplayer"
              name="singleplayer"
              placeholder="0"
            >
                <option value="0">No</option>
                <option value="1">Yes</option>
            </Field>
            <ErrorMessage name="singleplayer" component="div" />

            <h2 className="text-4xl font-bold">Multiplayer</h2>
            <label htmlFor="multiplayer">Has Multiplayer</label>
            <Field
                as="select"
              className="border"
              autoComplete="off"
              id="multiplayer"
              name="multiplayer"
              placeholder="0"
            >
                <option value="0">No</option>
                <option value="1">Yes</option>
            </Field>
            <ErrorMessage name="multiplayer" component="div" />

            <label htmlFor="multiplayer_local">Has Multiplayer Local</label>
            <Field
              as="select"
              className="border"
              autoComplete="off"
              id="multiplayer_local"
              name="multiplayer_local"
              placeholder="0"
            >
                <option value="0">No</option>
                <option value="1">Yes</option>

            </Field>
            <ErrorMessage name="multiplayer_local" component="div" />

            {/*--------------------------- My Review EN ----------------------------------- */}
            <h2 className="text-4xl font-bold">My Review</h2>
            <label htmlFor="my_review_en">My Review EN</label>
            <Field
              className="border"
              autoComplete="off"
              id="my_review_en"
              name="my_review_en"
              placeholder="Abc"
            >
            </Field>
            <ErrorMessage name="my_review_en" component="div" />

            {/*--------------------------- My Review PT ----------------------------------- */}
            <label htmlFor="my_review_pt">My Review PT</label>
            <Field
              className="border"
              autoComplete="off"
              id="my_review_pt"
              name="my_review_pt"
              placeholder="Abc"
            >
            </Field>
            <ErrorMessage name="my_review_pt" component="div" />
              
              {/*--------------------------- Submit Button ----------------------------------- */}

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
