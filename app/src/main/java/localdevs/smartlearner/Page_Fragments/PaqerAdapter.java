package localdevs.smartlearner.Page_Fragments;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;

import localdevs.smartlearner.Page_Fragments.Subjects_Fragments.Chemistry;
import localdevs.smartlearner.Page_Fragments.Subjects_Fragments.English;
import localdevs.smartlearner.Page_Fragments.Subjects_Fragments.Maths;
import localdevs.smartlearner.Page_Fragments.Subjects_Fragments.Physics;

public class PaqerAdapter extends FragmentStatePagerAdapter {


    int mNoOfTabs;

    public PaqerAdapter(FragmentManager fm,int NumberOfTabs) {
        super(fm);
        this.mNoOfTabs = NumberOfTabs;
    }

    @Override
    public Fragment getItem (int position){
        switch (position)
        {
            case 0:
                return new Chemistry();
            case 1:
                return new English();
            case 2:
                return new Maths();
            case 3:
                return new Physics();
            default:
                return null;
        }
    }
    @Override
    public int getCount(){
        return mNoOfTabs;
    }
}
