<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php


    $string = 'php is php';
    //substr()function

    $first = substr($string, 0, 2);
    $last = substr($string, -2, 2);

    echo "$first ==$last ?";
    if ($first == $last) {
        echo 'yes';
    } else {
        echo 'No';
    }


    ?>






</body>
</html>