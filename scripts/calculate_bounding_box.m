image_size = [1280 720];

bb = [137, 148;
    255, 268;
    319, 158;
    430, 280;
    437, 139;
    573, 285;
    608, 115;
    714, 236;
    653, 442;
    740, 521;
    769, 99;
    924, 270;
    928, 118;
    1023, 321];

tmp = repmat(image_size, [size(bb, 1) 1]);
bb_image = bb ./ tmp;

for ii = 1:2:size(bb,1)
    left     = bb_image(ii, 1)*100;
    top    = bb_image(ii, 2)*100;
    width   = bb_image(ii+1, 1)*100 - left;
    height  = bb_image(ii+1, 2)*100 - top;
    fprintf(1, 'left: %2.0f%%;\n', left);
    fprintf(1, 'top: %2.0f%%;\n', top);
    fprintf(1, 'width: %2.0f%%;\n', width);
    fprintf(1, 'height: %2.0f%%;\n', height);
    fprintf(1, '\n');
end