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
      const data = await fetchCategories();
      setCategories(data);
      console.log("Data", data);
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
    console.log(questionId, vote);
    const response = await handleVote(questionId, vote);
    console.log(response);
    if (response.status === 200) {
      setVoteRecorded(true);
      setTimeout(() => {
        setVoteRecorded(false);
        setSelectedQuestion(null);
      }, 3000);
    }
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
    console.log(JSON.stringify(categories));

    return categories.map((category) => {
      const isSubCategory = category.parentCategory !== 0;

      const isExpanded = expandedCategories.includes(category.categoryId);
      return (
        <Box
          key={category.categoryId}
          sx={{
            marginTop: 2,
            border: "1px solid #ccc",
            padding: 3,
            paddingRight: 1.5,
            paddingLeft: 1.5,
            borderRadius: 5,
          }}
        >
          {" "}
          {!isSubCategory ? (
            <Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                {category.categoryName}
              </Typography>
              {/* <Typography variant="h6" gutterBottom>
                {category.categoryDescription}
              </Typography>
               */}
              
              {/* {category.subcategories && category.subcategories.length > 0 && (
                <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                  subcategories
                </Typography>
              )} */}
            </Box>
          ) : (
            <Accordion
              expanded={isExpanded}
              onChange={() => handleCategoryExpand(category.categoryId)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${category.categoryId}-content`}
                id={`panel${category.categoryId}-header`}
              >
                {" "}
                <Typography variant="h6" gutterBottom>
                  {" "}
                  {category.categoryName}{" "}
                </Typography>{" "}
              </AccordionSummary>{" "}
              <AccordionDetails>
                {category?.questionsAndAnswers &&
                  category?.questionsAndAnswers.map((qa) => (
                    <Accordion
                      key={qa.id}
                      expanded={expandedQuestion === qa.id}
                      onChange={() => handleQuestionClick(qa.id)}
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
          )}
          {renderCategories(category.subcategories)}
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
        <Chat />
      </ChatIconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "99vh",
            boxSizing: "border-box",
            padding: 1,
            overflowY: "hidden",
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
            <Box sx={{ display: "flex" }}>
              <SupportAgent fontSize="large" sx={{ paddingRight: 1 }} />
              <Typography variant="h4" gutterBottom>
                Help Center
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
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              flexShrink: 0,
            }}
          >
            {categories.map((category) => (
              <Box
                key={category.categoryId}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  cursor: "pointer",
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "auto", sm: "auto" },
                  textAlign: "center",
                  borderBottom:
                    category.categoryId === selectedCategory
                      ? "3px solid red"
                      : "none",
                }}
              >
                <IconComponent icon={category.icon} />

                <Typography variant="body1">{category.categoryName}</Typography>
              </Box>
            ))}
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
                <Box>
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
            backgroundColor: "#fff",
            padding: 2,
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
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
