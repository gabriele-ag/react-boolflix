
function StarVote({vote}) {
    const voteNumber = Math.ceil(vote / 2)
    const starFull = Array(voteNumber).fill(0).map((curVote, index) => (
        <i className="fa-solid fa-star" key={index}></i>
    ));

    const starEmpty = Array(5 - voteNumber).fill(0).map((curVote, index) => (
        <i className="fa-regular fa-star" key={index}></i>
    ))


    return (
        <div className="m-bottom-20">
            <h4>Voto</h4>
            {starFull}
            {starEmpty}
        </div>
    )
}

export default StarVote