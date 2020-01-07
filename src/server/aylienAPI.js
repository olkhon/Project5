textapi.sentiment({
            url: parseUrl
        },

    ),
    (err, resp) => {
        if (err === null) {
            console.log(resp);
            res.json({
                msg1: resp.polarity,
                msg2: resp.polarity_confidence
            });
        } else {
            const failedText = "Could not unterstand the sentiment.";
            res.json({
                message: failedText
            });
        }

    };