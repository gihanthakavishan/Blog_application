import Post02 from '../../client/src/assets/post02.jpeg'
export default function Post(){
    return(<div className="post">
    <div className="image">
    <img src={Post02} alt="ghjg"/>
  </div>
    <div className="texts">
    <h2>Cultural significance</h2>
    <p className='info'>
      <a href="#/" className="author"> Gihantha Kavishan</a>
      <time>2023-08-25 12.38</time>
    </p>
    <p className="summary">Flowers have been symbols of beauty in most civilizations of the world, 
      and flower giving is still among the most popular of social amenities. 
      As gifts, flowers serve as expressions of affection for spouses, other family members, and friends; 
      as decorations at weddings and other ceremonies; as tokens of respect for the deceased; as cheering gifts to the bedridden; 
      and as expressions of thanks or appreciation. Most flowers bought by the public are grown in commercial greenhouses or
       horticultural fields and then sold through wholesalers to retail florists.</p>
      </div>
  </div>
  );
}