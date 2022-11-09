import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Styles from "../../css/box.module.css";
import { NavLink } from "react-router-dom";
import { BiRun } from "react-icons/bi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { BiCommentAdd } from "react-icons/bi";
import { AiOutlineCarryOut } from "react-icons/ai";
import { RiPhoneFindLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { FcPrivacy } from "react-icons/fc";
import Activity from "../../Pages/anmolpages/Activity";
 const Sidebar = () => {
  return (
    <div>
      <Box className={Styles.outerbox}>
        <Box className={Styles.innerbox}>
          <Box className={Styles.sidebar}>
            {" "}
            <Box className={Styles.outerdiv}>
              <Box className={Styles.flexbox}>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  {" "}
                  <BiRun />
                </span>
                <Link to="/activity">Activity</Link>
              </Box>
            </Box>
            <Box>
              <Box className={Styles.flexbox}>
                <RiQuestionnaireLine />{" "}
                <Link to="/invitation">Invitations</Link>
              </Box>
            </Box>
            <Box>
              Friends
              <Box>
                <FaUserFriends />
                <Link to="/friends">Friends List</Link>
              </Box>
              <Box>
                <ImProfile /> <Link to="/profile">View my Profile</Link>
              </Box>
              <Box>
                <BiCommentAdd />
                <Link to="Add friend">Add Friend</Link>
              </Box>
            </Box>
            <Box>
              Groups
              <Box>
                <AiOutlineCarryOut />
                <Link to="/posts">Recent Posts</Link>
              </Box>
              <Box>
                <RiPhoneFindLine /> <Link to="find">Find Group</Link>
              </Box>
            </Box>
            <Box>
              Profile
              <FiEdit />
              <Box>Edit Profile</Box>
              <FaUserEdit /> <Box>Edit Picture</Box>
              <FcPrivacy /> <Box>Edit Privacy</Box>
            </Box>
          </Box>
          <Box className={Styles.operations}>
            <Activity />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Sidebar;
