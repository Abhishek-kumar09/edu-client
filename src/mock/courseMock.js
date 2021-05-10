// import moment from "moment";
import mock from "../utils/mock";
import coursesContent from "./courses";
// import course from "./course";

mock.onGet("/api/courses/:courseid").reply(200, {});

mock.onGet("/api/courses/all").reply(200, coursesContent);
