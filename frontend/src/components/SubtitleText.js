import React from 'react'

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

export default function SubtitleText(props) {
    var handlerEnter = props.handlerEnter;
    var handlerLeave = props.handlerLeave;
    //var subtitles = Array.from(props.subtitles);
    var subtitles = sortByKey(Array.from(props.subtitles), "start")

    const subtitlesArray = subtitles.length ? (
        subtitles.map((subtitle, index) => {
            return (
                <div id={"subtitles-item-container-"+subtitle.id} key={subtitle.id} className="subtitle-item">
                    <span id={"subtitles-item-"+subtitle.id} className="subtitle" >{subtitle.text}</span>
                </div>
                )
        })
    ) : (
        null
    );
    return (
        <div id="subtitles">
            {subtitlesArray}
        </div>
    )
}
