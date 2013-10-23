clc;
close all;
clear all;

%%
[filename dirname] = uigetfile({'*.jpg','*.png'});

im = imread([dirname '/' filename]);

figure(1)
imshow(im);

%% mark
% Please follow the order below:
% weida
% sirui
% ruobing
% zhijing
% yuwei
% xuhui
% xiaolong
bb = ginput(14)

%%
image_size = size(im);

bba = [137, 148;
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

tmp = repmat(image_size(2:-1:1), [size(bb, 1) 1]);
bb_image = bb ./ tmp;

% weida
% sirui
% ruobing
% zhijing
% yuwei
% xuhui
% xiaolong
names = {'weida','sirui','ruobing','zhijing','yuwei','xuhui','xiaolong'};

for ii = 1:2:size(bb,1)
    name    = names{(ii+1)/2};
    left     = bb_image(ii, 1)*100;
    top    = bb_image(ii, 2)*100;
    width   = bb_image(ii+1, 1)*100 - left;
    height  = bb_image(ii+1, 2)*100 - top;
    fprintf(1, '    - name: %s\n', name);
    fprintf(1, '      left: %2.0f%%\n', left);
    fprintf(1, '      top: %2.0f%%\n', top);
    fprintf(1, '      width: %2.0f%%\n', width);
    fprintf(1, '      height: %2.0f%%\n', height);
end

% copy the results to markdown file