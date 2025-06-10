import { Languages } from "../tag-chip-button/languages";
import { Level } from "../tag-chip-button/level";
import { Role } from "../tag-chip-button/role";
import { Tools } from "../tag-chip-button/tools";

export interface Job {
  id: number,
  company: String,
  logo: String,
  new: boolean,
  featured: boolean,
  position: String,
  role: Role,
  level: Level,
  postedAt: String,
  contract: String,
  location: String,
  languages: Languages[],
  tools: Tools[]
}
