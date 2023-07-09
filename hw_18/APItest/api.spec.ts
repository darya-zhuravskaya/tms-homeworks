import superagent from "superagent"

describe("GET /api/users/:id", () => {
    test("When user exists", async () => {
        const object = {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        };
        const url = "https://reqres.in/api/users/2";

        const response = await superagent.get(url);

        expect(response.statusCode).toEqual(200);
        expect(response.body.data).toEqual(object);
    })

    test("When id is too big", async () => {
        const url = "https://reqres.in/api/users/2222222";

        const response = await superagent.get(url).ok(() => true);

        expect(response.statusCode).toEqual(404);
        expect(response.body).toEqual({})
    })

    test("When id is not a number", async () => {
        const url = "https://reqres.in/api/users/hello";

        const response = await superagent.get(url).ok(() => true);

        expect(response.statusCode).toEqual(404);
        expect(response.body).toEqual({})
    })

})

describe("POST /api/users", () => {
    test("Create user with valid data", async () => {
        const user = {
            name: "Adam",
            job: "teacher"
        }
        const url = "https://reqres.in/api/users";

        const response = await superagent.post(url).send(user);

        expect(response.statusCode).toEqual(201);
        expect(response.body.name).toEqual(user.name);
        expect(response.body.job).toEqual(user.job);
    })

    test("Create user with empty data", async () => {

        const url = "https://reqres.in/api/users";

        const response = await superagent.post(url).send({});

        expect(response.statusCode).toEqual(201);
        expect(response.body.name).toEqual(undefined);
        expect(response.body.job).toEqual(undefined);
    })
})

describe("Put /api/users/2", () => {
    test("Update a user", async () => {
        const user = {
            name: "Ivan",
            job: "driver"
        };
        const url = "https://reqres.in/api/users/2";

        const response = await superagent.put(url).send(user);

        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual(user.name);
        expect(response.body.job).toEqual(user.job);
    })

    test("Update a user with empty data", async () => {
        const url = "https://reqres.in/api/users/2";

        const response = await superagent.put(url).send({});

        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual(undefined);
        expect(response.body.job).toEqual(undefined);
    })
})

describe("POST /api/register/", () => {
    test("Register a defined user with valid data", async () => {
        const user = {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }

        const url = "https://reqres.in/api/register";

        const response = await superagent.post(url).send(user);

        expect(response.statusCode).toEqual(200);
        expect(response.body.id).toBeTruthy();
        expect(response.body.token).toBeTruthy();
    })

    test("Register a not defined user with valid data", async () => {
        const user = {
            email: "holt@gmail.com",
            password: "pistol"
        }

        const url = "https://reqres.in/api/register";

        const response = await superagent.post(url).send(user).ok(() => true);

        expect(response.statusCode).toEqual(400);
        expect(response.body.error).toEqual("Note: Only defined users succeed registration");

    })

    test("Register a user without email", async () => {
        const user = {
            password: "pistol"
        }

        const url = "https://reqres.in/api/register";

        const response = await superagent.post(url).send(user).ok(() => true);

        expect(response.statusCode).toEqual(400);
        expect(response.body.error).toEqual("Missing email or username");

    })
})