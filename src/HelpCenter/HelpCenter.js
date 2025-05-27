import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Fab,
  Drawer,
  MenuItem,
  Paper,
  MenuList,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Chat } from "@mui/icons-material";
import { iconMap, iconColorMap } from "../Helper/Helper";
import { fetchCategories, handleVote } from "./HelpCenterApi";
import Close from "@mui/icons-material/Close";
import SupportAgent from "@mui/icons-material/SupportAgent";
import Footer from "./Footer";
import { data } from "../Common/SharedResources";
import chatIcon from "../images/HR-Buddy-3.png";

const HelpCenter = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [topQuestions, setTopQuestions] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [voteRecorded, setVoteRecorded] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      //   setFilteredCategories(categories);
      calculateTopQuestions();
    } else {
      const filtered = searchQuestions(categories, searchQuery);
      setSelectedCategory(null);
      setFilteredQuestions(filtered);
      setTopQuestions(filtered);
    }
  }, [searchQuery, categories]);

  useEffect(() => {
    const getCategories = async () => {
      // const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
    console.log(categories);
  }, []);

  const searchQuestions = (categories, searchQuery) => {
    let results = [];
    categories.forEach((category) => {
      results = results.concat(
        category.questionsAndAnswers.filter((qa) =>
          qa.question.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      if (category.subcategories.length > 0) {
        results = results.concat(
          searchQuestions(category.subcategories, searchQuery)
        );
      }
    });
    return results;
  };

  const allQuestions = (categoryList) => {
    let result = [];
    categoryList.forEach((category) => {
      result = result.concat(category.questionsAndAnswers);
      if (category?.subcategories?.length > 0) {
        result = result.concat(allQuestions(category.subcategories));
      }
    });
    return result;
  };

  const calculateTopQuestions = () => {
    let all = allQuestions(categories);

    const sortedQuestions = all.sort(
      (a, b) => b.yesCount - b.noCount - (a.yesCount - a.noCount)
    );
    setTopQuestions(sortedQuestions.slice(0, 10));
  };

  const handleCategoryClick = (category) => {
    setSearchQuery("");
    setSelectedQuestion(null);
    setExpandedQuestion(null);
    setSelectedCategory(category.categoryId);

    if (
      category.questionsAndAnswers.length > 0 ||
      category?.subcategories?.length > 0
    ) {
      setFilteredCategories([category]);
    } else {
      setFilteredCategories([]);
    }
  };

  const handleCategoryExpand = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleQuestionClick = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
    setFilteredQuestions([]);
  };
  const handleSearchQuestionClick = (question) => {
    setSelectedQuestion(question);
    setExpandedQuestion(null);
    setFilteredQuestions([]);
    setSearchQuery("");
  };

  const IconComponent = ({ icon }) => {
    const Icon = iconMap[icon];
    const color = iconColorMap[icon];
    return Icon ? <Icon style={{ color: color, fontSize: 35 }} /> : null;
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
    setSelectedCategory(null);
    setSelectedQuestion(null);
    setFilteredCategories([]);
  };

  const handleVoteRecord = async (questionId, vote) => {
    // console.log(questionId, vote);
    // const response = await handleVote(questionId, vote);
    // console.log(response);
    // if (response.status === 200) {
    setVoteRecorded(true);
    setTimeout(() => {
      setVoteRecorded(false);
      setSelectedQuestion(null);
    }, 3000);
    // }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilteredQuestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderCategories = (categories) => {
    return categories.map((category) => {
      const isSubCategory = category.parentCategory !== 0;
      const isParentCategory = category.parentCategory === 0;
      const isExpanded = expandedCategories.includes(category.categoryId);

      return (
        <Box
          key={category.categoryId}
          sx={{
            marginTop: 2,
            border: "1px solid #ccc",
            padding: 1,
            paddingRight: 1,

            borderRadius: 3,
            backgroundImage: "linear-gradient(to right, #f0f4f8, #d9e2ec)",
            // height: "200px",
            // overflow: "hidden",
            backgroundColor:
              category.categoryId % 2 === 0 ? "#ffeb3b" : "#a3a7e2",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {!isParentCategory ? (
            <Accordion
              expanded={isExpanded}
              onChange={() => handleCategoryExpand(category.categoryId)}
              sx={{
                padding: 1,
                // backgroundColor:
                //   category.categoryId % 2 === 0 ? "#6fe2f4" : "#6fe2f4",
                backgroundImage:
                  category.categoryId % 2 === 0
                    ? "linear-gradient(to right, #94bdf1, #ffffff)"
                    : "linear-gradient(to right, #aec9ec, #ffffff)",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${category.categoryId}-content`}
                id={`panel${category.categoryId}-header`}
              >
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {category.categoryName}
                  </Typography>
                  <Typography variant="body1">
                    {category.categoryDescription}
                  </Typography>
                </Box>
              </AccordionSummary>
              <Box>
                {category.subcategories &&
                  renderCategories(category.subcategories)}
              </Box>
              <AccordionDetails>
                {category?.questionsAndAnswers &&
                  category?.questionsAndAnswers.map((qa) => (
                    <Accordion
                      key={qa.id}
                      expanded={expandedQuestion === qa.id}
                      onChange={() => handleQuestionClick(qa.id)}
                      // sx={{
                      //   backgroundColor:
                      //     qa.id % 2 === 0 ? "#c8e6c9" : "#ffe0b2",
                      // }}

                      sx={{
                        backgroundImage:
                          qa.id % 2 === 0
                            ? "linear-gradient(to right, #e0eafc, #ffffff)"
                            : "linear-gradient(to right, #a4c2e8, #ffffff)",
                        // backgroundColor:
                        //   qa.id % 2 === 0
                        //     ? "linear-gradient(to right, #e0eafc, #e0eafc)"
                        //     : "#ffe0b2",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${qa.id}-content`}
                        id={`panel${qa.id}-header`}
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          {qa.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{qa.answer}</Typography>
                        <Box
                          sx={{
                            paddingTop: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 2,
                            borderTop: "1px solid #ccc",
                          }}
                        >
                          <Typography variant="body1">
                            Was this helpful?
                          </Typography>
                          <Box>
                            <IconButton
                              color="primary"
                              onClick={() => handleVoteRecord(qa.id, "yes")}
                            >
                              <ThumbUpIcon />
                            </IconButton>
                            <IconButton
                              color="secondary"
                              onClick={() => handleVoteRecord(qa.id, "no")}
                            >
                              <ThumbDownIcon />
                            </IconButton>
                          </Box>
                        </Box>
                        {voteRecorded && (
                          <Typography sx={{ color: "green", mt: 2 }}>
                            Response recorded. Thank you!
                          </Typography>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ))}
              </AccordionDetails>
            </Accordion>
          ) : (
            <Box>
              {/* <Typography variant="h6" gutterBottom>
                {category.categoryName}
              </Typography>
              <Typography variant="body1">
                {category.categoryDescription}
              </Typography> */}

              {category.subcategories &&
                renderCategories(category.subcategories)}
              {/**Below will handle if any main category has questions&answers */}
              <AccordionDetails sx={{ marginTop: 1 }}>
                {category?.questionsAndAnswers &&
                  category?.questionsAndAnswers.map((qa) => (
                    <Accordion
                      key={qa.id}
                      expanded={expandedQuestion === qa.id}
                      onChange={() => handleQuestionClick(qa.id)}
                      sx={{
                        backgroundImage:
                          qa.id % 2 === 0
                            ? "linear-gradient(to right, #e0eafc, #ffffff)"
                            : "linear-gradient(to right, #bfc2ff, #ffffff)",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${qa.id}-content`}
                        id={`panel${qa.id}-header`}
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          {qa.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{qa.answer}</Typography>
                        <Box
                          sx={{
                            paddingTop: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 2,
                            borderTop: "1px solid #ccc",
                          }}
                        >
                          <Typography variant="body1">
                            Was this helpful?
                          </Typography>
                          <Box>
                            <IconButton
                              color="primary"
                              onClick={() => handleVoteRecord(qa.id, "yes")}
                            >
                              <ThumbUpIcon />
                            </IconButton>
                            <IconButton
                              color="secondary"
                              onClick={() => handleVoteRecord(qa.id, "no")}
                            >
                              <ThumbDownIcon />
                            </IconButton>
                          </Box>
                        </Box>
                        {voteRecorded && (
                          <Typography sx={{ color: "green", mt: 2 }}>
                            Response recorded. Thank you!
                          </Typography>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ))}
              </AccordionDetails>
            </Box>
          )}
        </Box>
      );
    });
  };

  const ChatIconButton = styled(Fab)(({ theme }) => ({
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(5),
  }));

  return (
    <>
      <ChatIconButton color="primary" onClick={toggleDrawer(true)}>
        {/* <Chat /> */}
        <img src={chatIcon} alt="Chat Icon" style={{ width: 60, height: 60 }} />
      </ChatIconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            // backgroundColor: "transparent",
            // backgroundImage: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
            backgroundImage: "linear-gradient(to right, #f0f2fc, #ffffff)",
            // padding: 2,
            boxShadow: "0px 4px 10px rgba(0 , 0, 0, 0.1)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "99vh",
            boxSizing: "border-box",
            padding: 1,
            overflowY: "hidden",
            // backgroundImage:'linear-gradient('
          }}
          width={600}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflowY: "hidden",
            }}
          >
            <Box sx={{ display: "flex", padding: 0.5 }}>
              {/* <SupportAgent fontSize="large" sx={{ paddingRight: 1 }} /> */}
              <img
                src={chatIcon}
                alt="Chat Icon"
                style={{ width: 40, height: 40, padding: 1, paddingRight: 10 }}
              />
              <Typography variant="h4" gutterBottom>
                HR Buddy
              </Typography>
            </Box>
            <Close
              fontSize="large"
              onClick={() => setDrawerOpen(false)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-root": {
                height: "40px",
              },
            }}
          />
          {/* {filteredQuestions.length > 0 && (
            <Paper
              sx={{ maxHeight: 200, overflow: "auto", marginBottom: 2 }}
              ref={dropdownRef}
            >
              <MenuList>
                {filteredQuestions.map((qa) => (
                  <MenuItem
                    key={qa.id}
                    onClick={() => handleSearchQuestionClick(qa)}
                  >
                    {qa.question}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          )} */}
          <Box
            sx={{
              padding: "10px",
              marginTop: "10px",
              // marginBottom: "10px",
              position: "relative",
              textAlign: "center",
              borderRadius: "20px",
              border: "1px solid #ccc",
              backgroundImage: "linear-gradient(to right, #e0f7fa, #aec9ec)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginBottom: "5px", fontWeight: "bold" }}
            >
              Categories
            </Typography>

            <Box
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                flexShrink: 0,
                height: isHovered ? "auto" : "100px",
                transition:
                  "max-height 1.5s cubix-bezier(0.68,0.55,0.27,1.55), transform 1.5s ease-out, opacity 1.5s ease-out",
                transform: isHovered ? "scaleY(1)" : "scaleY(1)",
                overflow: "hidden",

                // padding: "10px",
              }}
            >
              {categories.map((category, index) => (
                <Box
                  key={category.categoryId}
                  onClick={() => handleCategoryClick(category)}
                  onMouseEnter={() => setHoveredCategory(category.categoryId)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  sx={{
                    cursor: "pointer",
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100px",
                    textAlign: "center",
                    borderBottom:
                      category.categoryId === selectedCategory
                        ? "3px solid red"
                        : "none",
                    marginBottom:
                      category.categoryId === selectedCategory ? "15px" : "0",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  <IconComponent icon={category.icon} />

                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {category.categoryName}
                  </Typography>
                  {hoveredCategory === category.categoryId && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: index < 5 ? "90%" : "auto",
                        bottom: index >= 5 ? "90%" : "auto",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        color: "#fff",
                        padding: "8px",
                        borderRadius: "4px",
                        whiteSpace: "normal",
                        maxWidth: "150px",
                        wordWrap: "break-word",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                        zIndex: 10,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        visibility: "visible",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: index < 5 ? "-5px" : "auto",
                          bottom: index >= 5 ? "-5px" : "auto",
                          left: "50%",
                          transform: "translateX(-50%)",
                          borderWidth: "5px",
                          borderStyle: "solid",
                          borderColor:
                            index < 5
                              ? "rgba(0, 0, 0, 0.75) transparent transparent transparent"
                              : "transparent transparent rgba(0, 0, 0, 0.75) transparent",
                        },
                      }}
                    >
                      {category.categoryDescription ||
                        "No description available"}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          {/* {selectedQuestion && (
            <Box
              key={selectedQuestion.id}
              sx={{
                marginTop: 2,
                border: "1px solid #ccc",
                padding: 3,
                borderRadius: 5,
              }}
            >
              <Typography variant="h5">{selectedQuestion.question}</Typography>

              <Typography variant="h6">{selectedQuestion.answer}</Typography>
              <Box
                sx={{
                  paddingTop: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                  borderTop: "1px solid #ccc",
                }}
              >
                <Typography variant="body1">Was this helpful?</Typography>
                <Box>
                  <IconButton
                    color="primary"
                    onClick={() => handleVoteRecord(selectedQuestion.id, "yes")}
                  >
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleVoteRecord(selectedQuestion.id, "no")}
                  >
                    <ThumbDownIcon />
                  </IconButton>
                </Box>
              </Box>
              {voteRecorded && (
                <Typography sx={{ color: "green", mt: 2 }}>
                  Response recorded. Thank you!
                </Typography>
              )}
            </Box>
          )} */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              paddingRight: 1,
              paddingLeft: 1,
              marginBottom: "10px",
            }}
          >
            {!selectedCategory &&
              topQuestions.length > 0 &&
              !selectedQuestion && (
                <Box sx={{ marginTop: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {searchQuery === ""
                      ? "Top Questions"
                      : "Searched Questions"}
                  </Typography>
                  {topQuestions.map((qa) => (
                    <Accordion
                      key={qa.id}
                      expanded={expandedQuestion === qa.id}
                      onChange={() => handleQuestionClick(qa.id)}
                      sx={{
                        backgroundImage:
                          qa.id % 2 === 0
                            ? "linear-gradient(to right, #e0eafc, #ffffff)"
                            : "linear-gradient(to right, #a4c2e8, #ffffff)",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${qa.id}-content`}
                        id={`panel${qa.id}-header`}
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          {qa.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{qa.answer}</Typography>
                        <Box
                          sx={{
                            paddingTop: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 2,
                            borderTop: "1px solid #ccc",
                          }}
                        >
                          <Typography variant="body2">
                            Was this helpful?
                          </Typography>
                          <Box>
                            <IconButton
                              color="primary"
                              onClick={() => handleVoteRecord(qa.id, "yes")}
                            >
                              <ThumbUpIcon />
                            </IconButton>
                            <IconButton
                              color="secondary"
                              onClick={() => handleVoteRecord(qa.id, "no")}
                            >
                              <ThumbDownIcon />
                            </IconButton>
                          </Box>
                        </Box>
                        {voteRecorded && (
                          <Typography sx={{ color: "green", mt: 2 }}>
                            Response recorded. Thank you!
                          </Typography>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              )}
            {!selectedQuestion &&
              selectedCategory &&
              renderCategories(filteredCategories)}
          </Box>
        </Box>
        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "#f3f3f3",
            padding: "20px 0px",
            boxShadow: "0px -2px 5px rgba(0,0,0,0.1)",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          {selectedCategory && selectedCategory === 1 ? (
            <Typography>
              Need more help? Contact HR Help at workday@massmutual.com
            </Typography>
          ) : selectedCategory === 2 ? (
            <Typography>
              Need more help? Contact HR Help at onboarding@massmutual.com
            </Typography>
          ) : (
            <Typography>
              Need more help? Contact HR Help at mmgbsiindia@massmutual.com
            </Typography>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default HelpCenter;
