<?php
    //echo "This message is sent from PHP fileeeeee"; //uji coba tampilan di console

    //let's get all form values
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if(!empty($email) && !empty($message)) { //kalo email sama pesan kosong
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //untuk inputan email yang benar
            $receiver = "jensenraphael7@gmail.com"; //untuk email penerima pesannya
            $subject = "From : $nama <$email>"; //untuk subjek di emailnya
            $body = "Name: $nama\nEmail: $email\nMessage: $message\n\nRegards\n $nama";
            $sender = "From: $email";
            
            if(mail($receiver, $subject, $body, $sender)) { //mail() itu built-in php function untuk kirim pesan
                echo "Pesan berhasil dikirim!";
            }
            else{
               echo "Maaf, gagal mengirim pesan.";
            } 
        }
        else {
            echo "Masukkan email yang valid!";
        }
    }
    
    else {
        echo "Email dan pesan harus terisi";
    }
?>