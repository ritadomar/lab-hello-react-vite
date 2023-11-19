function FeatureCard(props) {
  return (
    <article className="feature-card">
      <img src={props.imgSrc} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  );
}

export default FeatureCard;
