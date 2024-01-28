<?php
    $idnow;
    try{
        $pdo = new PDO('mysql:host=localhost;dbname=test;','root','');
    }
    catch(PDOException $e){
        echo "Подключение к бд отсутствует";
    }
    if($_POST['id'] == '1'){
        $query = "SELECT * FROM `table1` WHERE `email` = '".$_POST['email']."'";
        $a = 0; 
        foreach($pdo -> query($query) as $row){
            $a++;
        }
        if($a == 0){
            $sql = "INSERT INTO `table1`(`name`, `email`, `town`, `password`) VALUES ('".$_POST['name']."','".$_POST['email']."','".$_POST['town']."','".$_POST['password']."');";
            $result = $pdo->query($sql);
            $query1 = "SELECT * FROM `table1` WHERE `email` = '".$_POST['email']."' AND `name` = '".$_POST['name']."' AND `password` = '".$_POST['password']."'";
            $a1 = 0; 
            foreach($pdo -> query($query1) as $row1){
                $a1++;
                $idnow = $row1['id'];
            }
            $query4 = "SELECT * FROM `table1` WHERE `id`=$idnow";
            echo '<table>';
            foreach($pdo -> query($query4) as $row4){
                echo "<tr>";
                echo "<td>'".$row4['name']."'</td>";
                echo "<td>'".$row4['email']."'</td>";
                echo "<td>'".$row4['town']."'</td>";
                echo "<td>'".$row4['password']."'</td>";
                echo "</tr>";
            }
            echo "</table>";
        }
        else{
            echo "Такая почта уже существует";
        }
    }
    if($_POST['id'] == '2'){
        $query2 = "SELECT * FROM `table1` WHERE `email` = '".$_POST['email']."' AND `name` = '".$_POST['name']."' AND `password` = '".$_POST['password']."'";
        $a2 = 0; 
        foreach($pdo -> query($query2) as $row2){
            $a2++;
            $idnow = $row2['id'];
        }
        if(a == 0){
            echo "Неправильные данные";
        }
        else{
            $query3 = "SELECT * FROM `table1` WHERE `id`=$idnow";
            echo "<table>";
            foreach($pdo -> query($query3) as $row3){
                echo "<tr>";
                echo "<td>'".$row4['name']."'</td>";
                echo "<td>'".$row4['email']."'</td>";
                echo "<td>'".$row4['town']."'</td>";
                echo "<td>'".$row4['password']."'</td>";
                echo "</tr>"; 
                echo "</table>";
            }
        }
    }
?>
