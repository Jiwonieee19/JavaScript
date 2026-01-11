try {
    riskyfunction();
} catch (error) {
    console.error("An error occured: " + error.message);
} finally {
    console.log("try another way :> (this is a clean up code) ") //this one always run
}

// throw new Error("Customize the Error Response")

// catch can be naked like catch()