import React from "react";
import LogsList from "./LogsList";

export default {
  title: "LogsList",
  component: LogsList,
};

const listas = [
  {
    title: "Title tekstas",
    post: "It is well known that there was formerly a rude custom for those who were sailing upon the Thames, to accost each other as they passed, in the most abusive language they could invent, generally, however, with as much satirical humour as they were capable of producing. Addison gives a specimen of this ribaldry, in Number 383 of The Spectator, when Sir Roger de Coverly and he are going to Spring-garden. Johnson was once eminently successful in this species of contest; a fellow having attacked him with some coarse raillery, Johnson answered him thus, Sir, your wife, under pretence of keeping a bawdy-house, is a receiver of stolen goods. One evening when he and Mr. Burke and Mr. Langton were in company together, and the admirable scolding of Timon of Athens was mentioned, this instance of Johnson's was quoted, and thought to have at least equal excellence.",
    created_at: "2022-06-21 xxxxxxxxxxxxx",
  },
  {
    title: "Title tekstas",
    post: "As Johnson always allowed the extraordinary talents of Mr. Burke, so Mr. Burke was fully sensible of the wonderful powers of Johnson. Mr. Langton recollects having passed an evening with both of them, when Mr. Burke repeatedly entered upon topicks which it was evident he would have illustrated with extensive knowledge and richness of expression; but Johnson always seized upon the conversation, in which, however, he acquitted himself in a most masterly manner. As Mr. Burke and Mr. Langton were walking home, Mr. Burke observed that Johnson had been very great that night; Mr. Langton joined in this, but added, he could have wished to hear more from another person; (plainly intimating that he meant Mr. Burke.) O, no (said Mr. Burke,) it is enough for me to have rung the bell to him.",
    created_at: "2022-06-11 xxxxxxxxxxxxx",
  },
  {
    title: "Title tekstas",
    post: "As Johnson always allowed the extraordinary talents of Mr. Burke, so Mr. Burke was fully sensible of the wonderful powers of Johnson. Mr. Langton recollects having passed an evening with both of them, when Mr. Burke repeatedly entered upon topicks which it was evident he would have illustrated with extensive knowledge and richness of expression; but Johnson always seized upon the conversation, in which, however, he acquitted himself in a most masterly manner. As Mr. Burke and Mr. Langton were walking home, Mr. Burke observed that Johnson had been very great that night; Mr. Langton joined in this, but added, he could have wished to hear more from another person; (plainly intimating that he meant Mr. Burke.) O, no (said Mr. Burke,) it is enough for me to have rung the bell to him.",
    created_at: "2022-05-11 xxxxxxxxxxxxx",
  },
  {
    title: "Title tekstas",
    post: "As Johnson always allowed the extraordinary talents of Mr. Burke, so Mr. Burke was fully sensible of the wonderful powers of Johnson. Mr. Langton recollects having passed an evening with both of them, when Mr. Burke repeatedly entered upon topicks which it was evident he would have illustrated with extensive knowledge and richness of expression; but Johnson always seized upon the conversation, in which, however, he acquitted himself in a most masterly manner. As Mr. Burke and Mr. Langton were walking home, Mr. Burke observed that Johnson had been very great that night; Mr. Langton joined in this, but added, he could have wished to hear more from another person; (plainly intimating that he meant Mr. Burke.) O, no (said Mr. Burke,) it is enough for me to have rung the bell to him.",
    created_at: "2022-05-25 xxxxxxxxxxxxx",
  },
];

export const Primary = () => <LogsList allPosts={listas} />;
