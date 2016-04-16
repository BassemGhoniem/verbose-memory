@list = (0 .. 32);
foreach $i (@list) {
   printf "%2g %5g %8g\n", $i, $i**2, $i**3
}
