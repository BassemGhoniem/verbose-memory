<?php

class MyMath
{
    public function posPower($n, $x)
    {
        if (!is_numeric($n) || !is_numeric($x)) {
            echo 'non-numeric args';

            return -1;
        }
        if (!$this->isPostive($x)) {
            echo 'negative power not allowed';

            return -1;
        }
        $result = 1;
        for ($i = 0; $i < $x; ++$i) {
            $result *= $n;
        }

        return $result;
    }
    public function isPostive($x)
    {
        return is_numeric($x) && $x > 0;
    }
}
