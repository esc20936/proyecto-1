/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./Post.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import PropTypes from "prop-types";

export default class Post extends React.Component {
  render() {
    return (
      <div className="PostContainer">
        <div className="postHeader">
          <div className="postProfileImageContainer">
            <img src={this.props.image} alt="profileP" className="profileImage" />
          </div>
          <div className="postUser">
            <span className="usernameP">{this.props.username}</span>
          </div>
          <span className="options">...</span>
        </div>
        <div className="postImage">
          <img src={this.props.postimg} alt="postImage" className="postImg" />
        </div>
        <div className="interactionContainer">
          <AiOutlineHeart className="icono reaccion" color="#000" />
          <FaRegComment className="icono ic2" color="#000" />
          <FiSend className="icono ic3" color="#000" />
          <BiBookmark className="icono ic4" color="#000" />
        </div>
        <div className="commentSection">
          <div className="ammountLikes">
            <span className="ammount">{Math.floor(Math.random() * (10000 - 25) + 25)} Me gusta</span>
          </div>
          <div className="postDescription">
            <p className="usernameP dd"> <span className="usernameP pd">{this.props.username}</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi eveniet aspernatur vero amet quo! Corrupti vel fugit provident, omnis nihil rerum quasi qui veritatis perferendis? Asperiores quibusdam quam nisi.
              Fuga deleniti culpa minima ea eaque quis accusamus ad exercitationem, optio quos pariatur blanditiis cupiditate ipsam? Fuga inventore perferendis ratione maiores blanditiis optio reiciendis qui, est ad enim harum praesentium.
            </p>
            <span className="time">Hace {Math.floor(Math.random() * (20 - 5) + 5)} días </span>
          </div>
          <div className="comentar">
            <HiOutlineEmojiHappy color="#000" size="1.5em" className="searchIcon2" />
            <input aria-label="Buscar entrada" autoCapitalize="none" className="clase1a clase2a clase3a" placeholder="Comentar" type="text" />
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  postimg: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
