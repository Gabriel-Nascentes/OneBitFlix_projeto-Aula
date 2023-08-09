import { ResourceWithOptions } from "adminjs";
import { Category } from "./../../models/Category";
import { categoryResourceOptions } from "./category";
import { Course } from "./../../models/Course";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { Episode } from "./../../models/Episode";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
import { User } from "./../../models/User";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures,
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures,
  },
  {
    resource: User,
    options: userResourceOptions,
  },
];
