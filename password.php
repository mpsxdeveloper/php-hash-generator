<?php

header("Content-Type: application/json; charset=utf-8");
$password = filter_input(INPUT_POST, "password");
echo json_encode(password_hash($password, PASSWORD_DEFAULT));