export const welcomeEmail = (name, token)=>{
    return (`
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenida a Minga</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #dddddd;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #ff6600;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            font-size: 24px;
        }
        .body {
            padding: 20px;
            text-align: center;
        }
        .button-container {
            text-align: center;
            margin: 20px 0;
        }
        .button {
            background-color: #ff6600;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .button:hover {
            background-color: #e65c00;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            Minga
        </div>
        <div class="body">
            <h1>¡Bienvenido a Minga!</h1>
            <p>Gracias por registrarte${" "+name}. Estamos encantados de tenerte con nosotros.</p>
            <p>Para empezar a explorar nuestra página y disfrutar de todos los beneficios, haz clic en el botón a continuación.</p>
            <div class="button-container">
                <a href="https://grupo3-front-minga.vercel.app/?token=${token}" class="button">Ir a la página</a>
            </div>
        </div>
    </div>
</body>
</html>
 `)
}