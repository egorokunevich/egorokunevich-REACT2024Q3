import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, useRouteError, Meta, Links, Scripts, ScrollRestoration, useSearchParams, useNavigate, useLoaderData, useParams } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const wrapper$2 = "_wrapper_1wv73_1";
const errorInfo = "_error-info_1wv73_10";
const errorTitle = "_error-title_1wv73_16";
const styles$a = {
  wrapper: wrapper$2,
  "error-info": "_error-info_1wv73_10",
  errorInfo,
  "error-title": "_error-title_1wv73_16",
  errorTitle
};
const btn = "_btn_1ur6k_1";
const btnStyles = {
  btn
};
function Button(props) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "button",
    {
      className: btnStyles.btn + " " + props.className,
      onClick: props.onClick,
      "data-testid": "button",
      children: props.txt
    }
  ) });
}
function ErrorPage() {
  return /* @__PURE__ */ jsxs("div", { className: styles$a.wrapper, children: [
    /* @__PURE__ */ jsx("h1", { className: styles$a.errorTitle, children: "Oops! Something went wrong." }),
    /* @__PURE__ */ jsx("p", { className: styles$a.errorInfo, children: "Please, try to reload the app." }),
    /* @__PURE__ */ jsx(
      Button,
      {
        txt: "Reload",
        onClick: () => {
        }
      }
    )
  ] });
}
const initialState = {
  currentPokemons: [],
  selectedPokemons: [],
  currentDetails: [],
  theme: "dark"
};
const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setCurrentPokemons: (state, action) => {
      state.currentPokemons = action.payload;
    },
    toggleSelectedPokemons: (state, action) => {
      const isSelected = !!state.selectedPokemons.find(
        (item) => item.name === action.payload.name
      );
      if (isSelected) {
        state.selectedPokemons = state.selectedPokemons.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.selectedPokemons.push(action.payload);
      }
    },
    unselectAllPokemons: (state) => {
      state.selectedPokemons = [];
    },
    setCurrentDetails: (state, action) => {
      state.currentDetails = action.payload;
    },
    toggleLayoutTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});
const {
  setCurrentPokemons,
  toggleSelectedPokemons,
  unselectAllPokemons,
  setCurrentDetails,
  toggleLayoutTheme
} = pokemonsSlice.actions;
const pokemonsReducer = pokemonsSlice.reducer;
const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 }
  })
});
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {
  }
});
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children });
};
const header = "_header_1ozn8_1";
const styles$9 = {
  header
};
const Header = ({ children }) => {
  return /* @__PURE__ */ jsx("header", { className: styles$9.header, "data-testid": "header", children });
};
const themeToggleContainer = "_theme-toggle-container_1j6m3_1";
const toggler = "_toggler_1j6m3_11";
const toggleTitle = "_toggle-title_1j6m3_15";
const toggleLabel = "_toggle-label_1j6m3_21";
const styles$8 = {
  "theme-toggle-container": "_theme-toggle-container_1j6m3_1",
  themeToggleContainer,
  toggler,
  "toggle-title": "_toggle-title_1j6m3_15",
  toggleTitle,
  "toggle-label": "_toggle-label_1j6m3_21",
  toggleLabel
};
const useAppDispatch = useDispatch.withTypes();
const useAppSelector = useSelector.withTypes();
const getSelectedPokemonsSelector = (store2) => store2.pokemons.selectedPokemons;
const getThemeSelector = (store2) => store2.pokemons.theme;
const ThemeToggler = () => {
  const [isChecked, setIsChecked] = useState(true);
  const theme = useAppSelector(getThemeSelector);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    setIsChecked(!isChecked);
    dispatch(toggleLayoutTheme(theme === "light" ? "dark" : "light"));
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$8.themeToggleContainer, children: [
    /* @__PURE__ */ jsx("div", { className: styles$8.toggleTitle, children: "DARK THEME" }),
    /* @__PURE__ */ jsxs("label", { className: styles$8.toggleLabel, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          onClick: handleClick,
          "aria-checked": isChecked
        }
      ),
      /* @__PURE__ */ jsx("div", { className: styles$8.toggler })
    ] })
  ] });
};
function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("title", { children: "Oh no!" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(ErrorPage, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function Layout$1({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("link", { rel: "icon", href: "/favicon.ico" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(ThemeProvider, { children }) }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  const theme = useAppSelector(getThemeSelector);
  return /* @__PURE__ */ jsxs("div", { className: `app ${theme}`, children: [
    /* @__PURE__ */ jsx(Header, { children: /* @__PURE__ */ jsx(ThemeToggler, {}) }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout: Layout$1,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const BASE_URL = "https://pokeapi.co/api/v2";
const getPokemon = async (query) => {
  const response = await fetch(BASE_URL + `/pokemon/${query}`);
  const data = await response.json();
  return data;
};
const getPokemons = async ({
  limit,
  offset,
  name: name2
}) => {
  const response = await fetch(
    BASE_URL + `/pokemon/${name2 || ""}?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data;
};
const loaderContainer$1 = "_loader-container_8wbln_1";
const loader$3 = "_loader_8wbln_1";
const pokeLoader = "_pokeLoader_8wbln_1";
const loaderText = "_loader-text_8wbln_56";
const styles$7 = {
  "loader-container": "_loader-container_8wbln_1",
  loaderContainer: loaderContainer$1,
  loader: loader$3,
  pokeLoader,
  "loader-text": "_loader-text_8wbln_56",
  loaderText
};
function Loader() {
  return /* @__PURE__ */ jsxs("div", { className: styles$7.loaderContainer, "data-testid": "loader", children: [
    /* @__PURE__ */ jsx("div", { className: styles$7.loader }),
    /* @__PURE__ */ jsx("div", { className: styles$7.loaderText, children: "LOADING" })
  ] });
}
const pageWrapper = "_page-wrapper_s7k7o_1";
const pageContent = "_page-content_s7k7o_10";
const name = "_name_s7k7o_26";
const pic$1 = "_pic_s7k7o_31";
const infoText = "_info-text_s7k7o_36";
const loaderContainer = "_loader-container_s7k7o_40";
const buttonContainer = "_button-container_s7k7o_46";
const closeBtn = "_close-btn_s7k7o_53";
const closeIcon = "_close-icon_s7k7o_70";
const styles$6 = {
  "page-wrapper": "_page-wrapper_s7k7o_1",
  pageWrapper,
  "page-content": "_page-content_s7k7o_10",
  pageContent,
  name,
  pic: pic$1,
  "info-text": "_info-text_s7k7o_36",
  infoText,
  "loader-container": "_loader-container_s7k7o_40",
  loaderContainer,
  "button-container": "_button-container_s7k7o_46",
  buttonContainer,
  "close-btn": "_close-btn_s7k7o_53",
  closeBtn,
  "close-icon": "_close-icon_s7k7o_70",
  closeIcon
};
function DetailsPage() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const pokemon = loaderData.pokemonToDisplay;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pokemon) {
      dispatch(setCurrentDetails([pokemon]));
    }
  }, [pokemon]);
  if (!pokemon) {
    return /* @__PURE__ */ jsx("div", { className: styles$6.loaderContainer, children: /* @__PURE__ */ jsx(Loader, {}) });
  }
  return /* @__PURE__ */ jsx("div", { className: styles$6.pageWrapper, "data-testid": "details-page", children: /* @__PURE__ */ jsxs("div", { className: styles$6.pageContent, children: [
    /* @__PURE__ */ jsx("div", { className: styles$6.buttonContainer, children: /* @__PURE__ */ jsx(
      "button",
      {
        className: styles$6.closeBtn,
        onClick: () => {
          navigate(
            `/?page=${currentPage}${searchQuery ? `&search=${searchQuery}` : ""}`
          );
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$6.closeIcon,
            style: {
              maskImage: "url(../../../assets/icons/cancel.svg)",
              WebkitMaskImage: "url(../../../assets/icons/cancel.svg)"
            }
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: styles$6.name, children: pokemon.name }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: styles$6.pic,
        src: pokemon.sprites.other["official-artwork"].front_default
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: styles$6.infoText, children: [
      "Height: ",
      pokemon.height
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$6.infoText, children: [
      "Weight: ",
      pokemon.weight
    ] })
  ] }) });
}
const searchWrapper = "_search-wrapper_1x84a_1";
const searchBar = "_search-bar_1x84a_8";
const searchInput = "_search-input_1x84a_14";
const searchBtn = "_search-btn_1x84a_36";
const iconMask = "_icon-mask_1x84a_55";
const styles$5 = {
  "search-wrapper": "_search-wrapper_1x84a_1",
  searchWrapper,
  "search-bar": "_search-bar_1x84a_8",
  searchBar,
  "search-input": "_search-input_1x84a_14",
  searchInput,
  "search-btn": "_search-btn_1x84a_36",
  searchBtn,
  "icon-mask": "_icon-mask_1x84a_55",
  iconMask
};
function SearchBar(props) {
  const { onSearch } = props;
  const [searchParam, setSearchParam] = useState("");
  const handleSearch = () => {
    onSearch(searchParam);
  };
  return /* @__PURE__ */ jsx("div", { className: styles$5.searchWrapper, "data-testid": "search-bar", children: /* @__PURE__ */ jsxs("div", { className: styles$5.searchBar, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        className: styles$5.searchInput,
        type: "text",
        placeholder: "Search query...",
        onChange: (e) => {
          setSearchParam(e.target.value);
        },
        onKeyDown: (e) => {
          if (!e.repeat) {
            if (e.key === "Enter") {
              handleSearch();
            }
          }
        },
        value: searchParam
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: styles$5.searchBtn,
        onClick: () => {
          handleSearch();
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$5.iconMask,
            style: {
              maskImage: "url(../../../../../assets/icons/search.svg)",
              WebkitMaskImage: "url(../../../../../assets/icons/search.svg)"
            }
          }
        )
      }
    )
  ] }) });
}
const SearchBar$1 = React.memo(SearchBar);
const card = "_card_137r0_1";
const picShiny = "_pic-shiny_137r0_21";
const cardTitle = "_card-title_137r0_25";
const picContainer = "_pic-container_137r0_30";
const pic = "_pic_137r0_21";
const checkboxLabel = "_checkbox-label_137r0_46";
const checkboxMarker = "_checkbox-marker_137r0_63";
const styles$4 = {
  card,
  "pic-shiny": "_pic-shiny_137r0_21",
  picShiny,
  "card-title": "_card-title_137r0_25",
  cardTitle,
  "pic-container": "_pic-container_137r0_30",
  picContainer,
  pic,
  "checkbox-label": "_checkbox-label_137r0_46",
  checkboxLabel,
  "checkbox-marker": "_checkbox-marker_137r0_63",
  checkboxMarker
};
function PokeCard({ pokemon, isSelected }) {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const navigate = useNavigate();
  if (!pokemon) {
    return /* @__PURE__ */ jsx("div", { className: styles$4.card, children: /* @__PURE__ */ jsx(Loader, {}) });
  }
  const renderImage = () => {
    if (pokemon.sprites.front_default) {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("img", { className: styles$4.pic, src: pokemon.sprites.front_default }),
        /* @__PURE__ */ jsx("img", { className: styles$4.picShiny, src: pokemon.sprites.front_shiny })
      ] });
    }
    return /* @__PURE__ */ jsx(
      "img",
      {
        className: styles$4.pic,
        src: pokemon.sprites.other["official-artwork"].front_default
      }
    );
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$4.card,
      onClick: (e) => {
        e.stopPropagation();
        navigate(
          `/pokemon/${pokemon.name}?page=${page}${searchQuery ? `&search=${searchQuery}` : ""}`
        );
      },
      "data-testid": "poke-card",
      children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            className: styles$4.checkboxLabel,
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  className: styles$4.check,
                  checked: isSelected,
                  onChange: (e) => {
                    e.stopPropagation();
                    dispatch(toggleSelectedPokemons(pokemon));
                  }
                }
              ),
              isSelected && /* @__PURE__ */ jsx("div", { className: styles$4.checkboxMarker })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: styles$4.cardTitle, children: pokemon.name }),
        /* @__PURE__ */ jsx("div", { className: styles$4.picContainer, children: renderImage() }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Weight: ",
          pokemon.weight
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Height: ",
          pokemon.height
        ] })
      ]
    }
  );
}
const listContainer = "_list-container_1daq1_1";
const notFoundMessage$1 = "_not-found-message_1daq1_11";
const styles$3 = {
  "list-container": "_list-container_1daq1_1",
  listContainer,
  "not-found-message": "_not-found-message_1daq1_11",
  notFoundMessage: notFoundMessage$1
};
function ResultsList() {
  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);
  const loaderData = useLoaderData();
  const pokemons = loaderData.pokemons;
  if (!pokemons.length) {
    return /* @__PURE__ */ jsx("div", { className: styles$3.notFoundMessage, children: "There is no such Pokemon!" });
  }
  return /* @__PURE__ */ jsx("div", { className: styles$3.listContainer, "data-testid": "resultsListWrapper", children: pokemons.map((item, id) => /* @__PURE__ */ jsx(
    PokeCard,
    {
      pokemon: item,
      isSelected: selectedPokemons.some(
        (pokemon) => pokemon.name === item.name
      )
    },
    item.name + id
  )) });
}
const wrapper$1 = "_wrapper_c8wgb_1";
const mainSection = "_main-section_c8wgb_6";
const pageContainer = "_page-container_c8wgb_13";
const notFoundWrapper = "_not-found-wrapper_c8wgb_22";
const notFoundMessage = "_not-found-message_c8wgb_30";
const styles$2 = {
  wrapper: wrapper$1,
  "main-section": "_main-section_c8wgb_6",
  mainSection,
  "page-container": "_page-container_c8wgb_13",
  pageContainer,
  "not-found-wrapper": "_not-found-wrapper_c8wgb_22",
  notFoundWrapper,
  "not-found-message": "_not-found-message_c8wgb_30",
  notFoundMessage
};
const createRange = (start, end) => {
  if (end <= start) {
    return [1];
  }
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};
const PAGE_BTNS_MIN_COUNT = 5;
const SELECTED_BTN_SIBLINGS_COUNT = 2;
const usePagination = (props) => {
  const { pagesCount, currentPage } = props;
  const paginationRange = () => {
    const pageBtnsCount = SELECTED_BTN_SIBLINGS_COUNT + PAGE_BTNS_MIN_COUNT;
    if (pageBtnsCount >= pagesCount) {
      return createRange(1, pagesCount);
    }
    const leftSiblingIndex = Math.max(
      currentPage - SELECTED_BTN_SIBLINGS_COUNT,
      1
    );
    const rightSiblingIndex = Math.min(
      currentPage + SELECTED_BTN_SIBLINGS_COUNT,
      pagesCount
    );
    const shouldShowLeftDots = leftSiblingIndex > SELECTED_BTN_SIBLINGS_COUNT;
    const shouldShowRightDots = rightSiblingIndex < pagesCount - SELECTED_BTN_SIBLINGS_COUNT;
    const firstPageIndex = 1;
    const lastPageIndex = pagesCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + SELECTED_BTN_SIBLINGS_COUNT * SELECTED_BTN_SIBLINGS_COUNT;
      const leftRange = createRange(1, leftItemCount);
      return [...leftRange, "...", pagesCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + SELECTED_BTN_SIBLINGS_COUNT * SELECTED_BTN_SIBLINGS_COUNT;
      const rightRange = createRange(
        pagesCount - rightItemCount + 1,
        pagesCount
      );
      return [firstPageIndex, "...", ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = createRange(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }
  };
  return paginationRange();
};
const container$1 = "_container_1p58n_1";
const pagination = "_pagination_1p58n_9";
const pageBtn = "_page-btn_1p58n_17";
const styles$1 = {
  container: container$1,
  pagination,
  "page-btn": "_page-btn_1p58n_17",
  pageBtn
};
const PageButton = (props) => {
  const { txt, isActive, handleClick } = props;
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: styles$1.pageBtn,
      style: {
        color: isActive ? "var(--bg-color)" : "var(--primary-color)",
        backgroundColor: isActive ? "var(--primary-color)" : "var(--bg-color)"
      },
      onClick: (e) => {
        e.stopPropagation();
        if (+txt) {
          handleClick(+txt);
        }
      },
      "data-testid": "page-btn",
      children: txt
    }
  );
};
const Pagination = (props) => {
  const { totalPages, currentPage, handleClick } = props;
  const paginationRange = usePagination({
    pagesCount: totalPages,
    currentPage
  });
  return /* @__PURE__ */ jsx("div", { className: styles$1.container, children: /* @__PURE__ */ jsx("div", { className: styles$1.pagination, children: paginationRange == null ? void 0 : paginationRange.map((item, i) => /* @__PURE__ */ jsx(
    PageButton,
    {
      txt: item.toString(),
      isActive: +item === currentPage,
      handleClick
    },
    i
  )) }) });
};
const wrapper = "_wrapper_ge4e7_1";
const container = "_container_ge4e7_12";
const info = "_info_ge4e7_21";
const styles = {
  wrapper,
  container,
  info
};
const convertToCSV = (rawData) => {
  const data = rawData.map((item) => {
    const { sprites, ...newItem } = item;
    return newItem;
  });
  const headers = Object.keys(data[0]).toString();
  const mainData = data.map((item) => {
    return Object.values(item).filter((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return value;
      }
    });
  });
  return [headers, ...mainData].join("\n");
};
const getDownloadLink = (data) => {
  const blob = new Blob([data], { type: "application/csv" });
  const downloadURL = URL.createObjectURL(blob);
  return downloadURL;
};
const Flyout = ({ selectedPokemons }) => {
  const dispatch = useAppDispatch();
  return /* @__PURE__ */ jsx("div", { className: styles.wrapper, "data-testid": "flyout", children: /* @__PURE__ */ jsxs("div", { className: styles.container, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.info, children: [
      "Pokemons selected: ",
      selectedPokemons.length
    ] }),
    /* @__PURE__ */ jsx(
      Button,
      {
        txt: "Unselect All",
        onClick: () => dispatch(unselectAllPokemons()),
        "data-testid": "unselect-btn"
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        style: { padding: "0.6em 1.2em", lineHeight: "1.15" },
        className: btnStyles.btn,
        href: getDownloadLink(convertToCSV(selectedPokemons)),
        onClick: () => dispatch(unselectAllPokemons()),
        download: `${selectedPokemons.length}_pokemons.csv`,
        children: "Download"
      }
    )
  ] }) });
};
const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};
const PAGE_LIMIT = 12;
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const currentPage = +(searchParams.get("page") || "1");
  const searchQuery = searchParams.get("search") || "";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const updatePage = (pageNumber) => {
    setSearchParams({ page: pageNumber.toString() });
  };
  const loaderData = useLoaderData();
  const pokemons = loaderData.pokemons;
  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);
  useEffect(() => {
    if (pokemons) {
      dispatch(setCurrentPokemons(pokemons));
    }
  }, [pokemons]);
  const shouldRenderPagination = pokemons && pokemons.length > 1;
  return /* @__PURE__ */ jsx("div", { className: styles$2.pageContainer, children: /* @__PURE__ */ jsxs("div", { className: styles$2.wrapper, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: styles$2.mainSection,
        onClick: () => {
          if (params.pokeName) {
            navigate(
              `/?page=${currentPage}${searchQuery ? `&search=${searchQuery}` : ""}`
            );
          }
        },
        "data-testid": "searchPage-mainSection",
        children: [
          /* @__PURE__ */ jsx(
            SearchBar$1,
            {
              onSearch: (query) => {
                navigate(
                  `/?page=${currentPage}${query ? `&search=${query}` : ""}`
                );
              }
            }
          ),
          /* @__PURE__ */ jsx(ResultsList, {}),
          shouldRenderPagination && /* @__PURE__ */ jsx(
            Pagination,
            {
              totalPages: getPagesCount(loaderData.totalCount, PAGE_LIMIT),
              currentPage: +currentPage,
              handleClick: (pageNumber) => {
                updatePage(pageNumber);
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Outlet, {}),
    selectedPokemons.length > 0 && /* @__PURE__ */ jsx(Flyout, { selectedPokemons })
  ] }) });
}
const getOffset = (currentPage, limit = PAGE_LIMIT) => Math.ceil((currentPage - 1) * limit);
const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
const loader$2 = async ({ request, params }) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const offset = getOffset(+page);
  const pokemonsData = await getPokemons({
    limit: PAGE_LIMIT,
    offset
  });
  const totalCount = pokemonsData.count;
  const pokemons = searchQuery ? [await getPokemon(searchQuery)] : await Promise.all(
    pokemonsData.results.map(async (poke) => {
      return await getPokemon(poke.name);
    })
  );
  const pokemonToDisplay = await getPokemon(params.pokeName || "");
  return { pokemons, totalCount, pokemonToDisplay };
};
const meta$1 = ({ matches, data }) => {
  const parentMeta = matches.flatMap((match) => match.meta ?? []).filter((meta2) => !("title" in meta2));
  return [
    ...parentMeta,
    {
      title: capitalizeFirstLetter(
        (data == null ? void 0 : data.pokemonToDisplay.name) || "Pokemon Wiki"
      )
    }
  ];
};
const Details = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(DetailsPage, {}) });
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Details,
  loader: loader$2,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const loader$1 = async ({ request, params }) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const offset = getOffset(+page);
  const pokemonsData = await getPokemons({
    limit: PAGE_LIMIT,
    offset
  });
  const totalCount = pokemonsData.count;
  const pokemons = searchQuery ? [await getPokemon(searchQuery)] : await Promise.all(
    pokemonsData.results.map(async (poke) => {
      return await getPokemon(poke.name);
    })
  );
  const pokemonToDisplay = await getPokemon(params.pokeName || "");
  return { pokemons, totalCount, pokemonToDisplay };
};
function Layout() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(SearchPage, {}) });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const loader = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const offset = getOffset(+page);
  const pokemonsData = await getPokemons({
    limit: PAGE_LIMIT,
    offset
  });
  const totalCount = pokemonsData.count;
  const pokemons = searchQuery ? [await getPokemon(searchQuery)] : await Promise.all(
    pokemonsData.results.map(async (poke) => {
      return await getPokemon(poke.name);
    })
  );
  return { pokemons, totalCount };
};
const meta = ({ matches }) => {
  const parentMeta = matches.flatMap((match) => match.meta ?? []).filter((meta2) => !("title" in meta2));
  return [...parentMeta, { title: "Pokemon Wiki" }];
};
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SearchPage, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-B7PfUS6I.js", "imports": ["/assets/components-DaO9B0RH.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-JhooY-Ut.js", "imports": ["/assets/components-DaO9B0RH.js", "/assets/selectors-DeimZJVc.js", "/assets/reduxHooks-sRxE1122.js"], "css": ["/assets/selectors-DofpQg-N.css", "/assets/root-D9ZcCA0M.css"] }, "routes/_layout.pokemon.$pokeName": { "id": "routes/_layout.pokemon.$pokeName", "parentId": "routes/_layout", "path": "pokemon/:pokeName", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout.pokemon._pokeName-CB_EG9uo.js", "imports": ["/assets/components-DaO9B0RH.js", "/assets/Loader-HfTiRl3h.js", "/assets/reduxHooks-sRxE1122.js"], "css": ["/assets/Loader-Bl4uOim5.css", "/assets/_layout.pokemon-EKugXUP5.css"] }, "routes/_layout": { "id": "routes/_layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout-DYDkhlhM.js", "imports": ["/assets/components-DaO9B0RH.js", "/assets/Loader-HfTiRl3h.js", "/assets/reduxHooks-sRxE1122.js", "/assets/selectors-DeimZJVc.js", "/assets/SearchPage-MmmSILWX.js"], "css": ["/assets/Loader-Bl4uOim5.css", "/assets/selectors-DofpQg-N.css", "/assets/SearchPage-5pDvT2i3.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-zj_EL04q.js", "imports": ["/assets/components-DaO9B0RH.js", "/assets/Loader-HfTiRl3h.js", "/assets/reduxHooks-sRxE1122.js", "/assets/selectors-DeimZJVc.js", "/assets/SearchPage-MmmSILWX.js"], "css": ["/assets/Loader-Bl4uOim5.css", "/assets/selectors-DofpQg-N.css", "/assets/SearchPage-5pDvT2i3.css"] } }, "url": "/assets/manifest-2d39cfb8.js", "version": "2d39cfb8" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_layout.pokemon.$pokeName": {
    id: "routes/_layout.pokemon.$pokeName",
    parentId: "routes/_layout",
    path: "pokemon/:pokeName",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
