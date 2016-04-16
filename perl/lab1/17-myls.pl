
opendir my $dir, ".";
@things = readdir $dir;
foreach my $thing (@things) {
    if ($thing eq '.' or $thing eq '..') {
        next;
    }
    print $thing."\n";
}
