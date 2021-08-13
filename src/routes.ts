import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "React",
        duration: 10,
        educator: "Diego"
    }
    );
    CreateCourseService.execute({
        name: "Nodejs",
        educator: "Dani"
    }
    );

    return response.send();
}
