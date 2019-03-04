package localdevs.smartlearner.Page_Fragments;

import android.net.Uri;
import android.support.design.widget.TabLayout;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import localdevs.smartlearner.Page_Fragments.Subjects_Fragments.Chemistry;
import localdevs.smartlearner.Page_Fragments.Subjects_Fragments.English;
import localdevs.smartlearner.Page_Fragments.Subjects_Fragments.Maths;
import localdevs.smartlearner.Page_Fragments.Subjects_Fragments.Physics;
import localdevs.smartlearner.Page_Fragments.views.CustomView;
import localdevs.smartlearner.R;

public class User_Activity extends AppCompatActivity implements English.OnFragmentInteractionListener , Maths.OnFragmentInteractionListener,Physics.OnFragmentInteractionListener,Chemistry.OnFragmentInteractionListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user);

        CustomView view = new CustomView(this);

        TabLayout tabLayout = findViewById(R.id.tabLayout);
        tabLayout.addTab(tabLayout.newTab().setText("Chemistry"));
        tabLayout.addTab(tabLayout.newTab().setText("English"));
        tabLayout.addTab(tabLayout.newTab().setText("Maths"));
        tabLayout.addTab(tabLayout.newTab().setText("Physics"));
//      //else...
        tabLayout.setTabGravity(TabLayout.GRAVITY_FILL);

        final ViewPager viewPager = findViewById(R.id.pager);
        final PagerAdapter adapter = new PaqerAdapter(getSupportFragmentManager(),tabLayout.getTabCount());
        viewPager.setAdapter(adapter);
        viewPager.addOnPageChangeListener(new TabLayout.TabLayoutOnPageChangeListener(tabLayout));

        tabLayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                viewPager.setCurrentItem(tab.getPosition());
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {

            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {

            }
        });
    }
    @Override
    public void onFragmentInteraction(Uri uri) {

    }

    public void GoToMenu(){

    }
}
